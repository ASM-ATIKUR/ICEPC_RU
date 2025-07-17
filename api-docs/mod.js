/**
 * @swagger
 * tags:
 *   - name: Mod
 *     description: Moderator management
 *
 * components:
 *   schemas:
 *     Mod:
 *       type: object
 *       required:
 *         - name
 *         - email
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the moderator
 *         name:
 *           type: string
 *           description: Moderator's name
 *         email:
 *           type: string
 *           description: Moderator's email address
 *         role:
 *           type: string
 *           description: Moderator's role or position
 *       example:
 *         name: "Jane Doe"
 *         email: "jane@example.com"
 *         role: "Event Moderator"
 */

/**
 * @swagger
 * /api/mod:
 *   get:
 *     summary: Get all moderators
 *     tags: [Mod]
 *     responses:
 *       200:
 *         description: List of moderators
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Mod'
 *   post:
 *     summary: Add a new moderator
 *     tags: [Mod]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Mod'
 *     responses:
 *       201:
 *         description: The created moderator
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Mod'
 *
 * /api/mod/{id}:
 *   delete:
 *     summary: Delete a moderator by ID
 *     tags: [Mod]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The moderator ID
 *     responses:
 *       200:
 *         description: Moderator deleted
 *       404:
 *         description: Moderator not found
 */