import { Router } from "express";
import { LoginUser, LogoutUser, RegisterUser, refershAccessToken } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    RegisterUser)

router.route("/login").post(LoginUser)

//secured routes
router.route("/logout").post(verifyJWT, LogoutUser)

router.route("/refresh-token").post(refershAccessToken)

export default router