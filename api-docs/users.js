/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - sid
 *         - email
 *         - password
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the user
 *         sid:
 *           type: string
 *           description: Student ID (10 characters)
 *         email:
 *           type: string
 *           description: User email address
 *         password:
 *           type: string
 *           description: User password (hashed)
 *         profileId:
 *           type: string
 *           description: Reference to Profile
 *         isVerified:
 *           type: boolean
 *           default: false
 *         isUpdated:
 *           type: boolean
 *           default: false
 *         isAdmin:
 *           type: boolean
 *           default: false
 *         isSuperAdmin:
 *           type: boolean
 *           default: false
 *       example:
 *         sid: "1234567890"
 *         email: "user@example.com"
 *         password: "hashedpassword"
 *         profileId: "64718aa3cde6d3c575b0f442"
 *         isVerified: false
 *         isUpdated: false
 *         isAdmin: false
 *         isSuperAdmin: false
 */

/**
 * @swagger
 * /api/users/me:
 *   get:
 *     summary: Get current user info
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: The user info
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */

/**
 * @swagger
 * /api/users/list:
 *   get:
 *     summary: Get list of users (superadmin only)
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: header
 *         name: x-auth-token
 *         schema:
 *           type: string
 *         required: true
 *         description: JWT token
 *     responses:
 *       200:
 *         description: List of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: The auto-generated id of the user
 *                   sid:
 *                     type: string
 *                     description: Student ID (10 characters)
 *                   email:
 *                     type: string
 *                     description: User email address
 *                   profileId:
 *                     type: string
 *                     description: Id of the profile
 *                   isVerified:
 *                     type: boolean
 *                   isUpdated:
 *                     type: boolean
 *                   isAdmin:
 *                     type: boolean
 *                   isSuperAdmin:
 *                     type: boolean
 */

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Register a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - sid
 *               - email
 *               - password
 *             properties:
 *               sid:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Verification email sent
 *       400:
 *         description: User already registered
 */

/**
 * @swagger
 * /api/users/verify/{token}:
 *   get:
 *     summary: Verify user email
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: token
 *         schema:
 *           type: string
 *         required: true
 *         description: Verification token
 *     responses:
 *       200:
 *         description: Account Verified
 *       404:
 *         description: User not exists
 */

/**
 * @swagger
 * /api/users/resetpassword:
 *   post:
 *     summary: Send password reset email
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Password reset link sent
 *       400:
 *         description: User not found
 */

/**
 * @swagger
 * /api/users/newpassword:
 *   put:
 *     summary: Reset user password
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Id:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Password reseted
 *       400:
 *         description: User not found
 */

/**
 * @swagger
 * /api/users:
 *   put:
 *     summary: Update user admin status
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Id:
 *                 type: string
 *               isAdmin:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: User updated
 *       400:
 *         description: User not found
 */