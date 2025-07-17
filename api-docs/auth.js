/**
 * @swagger
 * tags:
 *   - name: Auth
 *     description: User authentication
 *
 * components:
 *   schemas:
 *     AuthRequest:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           description: User email address
 *         password:
 *           type: string
 *           description: User password
 *       example:
 *         email: "user@example.com"
 *         password: "yourpassword"
 *     AuthResponse:
 *       type: string
 *       description: JWT authentication token
 */

/**
 * @swagger
 * /api/auth:
 *   post:
 *     summary: User login and get JWT token
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AuthRequest'
 *     responses:
 *       200:
 *         description: JWT authentication token
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
 *       400:
 *         description: Invalid email or password
 *       403:
 *         description: Please verify your account from email
 *       404:
 *         description: Validation error
 */