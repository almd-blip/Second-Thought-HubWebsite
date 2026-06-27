import { Router, type IRouter } from "express";
import { SubmitContactBody, SubmitContactResponse } from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/contact", (req, res) => {
  const parsed = SubmitContactBody.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({ error: "Invalid request body" });
    return;
  }

  const { name, email, subject, message } = parsed.data;

  req.log.info({ name, email, subject: subject ?? null }, "Contact form submission received");

  const data = SubmitContactResponse.parse({
    success: true,
    message: "Thank you for reaching out. We will be in touch soon.",
  });

  res.json(data);
});

export default router;
