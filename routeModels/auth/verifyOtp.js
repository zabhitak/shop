var OTP = require("../OTP/OTP")

const verifyOtp = async (req,res ) => {
    const { otpId } = req.params
    try{
        var otp = await OTP.findById(otpId)

        if(!otp){
            req.flash("error","Cannot verify your account right now !!!")
            res.redirect("/signup")
        }
<<<<<<< HEAD
=======
        
>>>>>>> 70ed34759fe6a280e752adebb6d508d42378cf40
        res.render("otp",{ title : "Account Verification", otp })
        

    }catch(err){
        console.log(err)
        req.flash("error","Cannot verify your account right now !!!")
        res.redirect("/signup")
    }
}

module.exports = verifyOtp