const dailyController=require('../dashboard/dashboardcontroller')

const router=require('express').Router()


router.get("/fetchData",dailyController.fetchData)

router.get("/basicvalue",dailyController.BasicValue)





//router.post("/changePassword",dailyController.otpverify)
module.exports=router;