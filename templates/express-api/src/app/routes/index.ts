import { Router } from "express";
import settings from "../../settings";

const router = Router()

router.get("/", (_request, reply, next) => {
    reply.status(200).json({
        message: "OK",
        version: settings.version
    })
})

export default router