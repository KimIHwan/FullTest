import {db} from "../db.js"
import bcrypt from "bcryptjs";

export const register = (req, res) => {

    // 중복 유저 체크
    const q = "SELECT * FROM users WHERE email = ? OR username = ?"

    db.query(q, [req.body.email, req.body.username], (err,data) => {
        if(err) return res.json(err)
        if(data.length) return res.status(409).json("이미 존재하는 유저입니다!");

        //Hash the password and create a user

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)

        const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)"
        const values = [
            req.body.username,
            req.body.email,
            hash,
        ]

        db.query(q, [values], (err, data)=>{
            if(err) return res.json(err)
            return res.status(200).json("User has been created.");
        })

    })

}

export const login = (req, res) => {
    //유저 확인

    const q = "SELECT * FROM users WHERE username = ?"

    db.query(q,[req.body.username], (err,data)=>{
        if (err) return res.json(err)
        if(data.length === 0) return res.status(404).json("존재하지 않는 유저입니다.")

        //비밀번호 확인

        const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password)

        if(!isPasswordCorrect) return res.status(400).json("아이디나 비밀번호가 일치하지 않습니다.")


    })
    
}

export const logout = (req, res) => {
    
}