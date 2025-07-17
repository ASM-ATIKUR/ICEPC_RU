/**
 * @swagger
 * tags:
 *   - name: Notices
 *     description: Notice board and announcements
 *
 * components:
 *   schemas:
 *     Notice:
 *       type: object
 *       required:
 *         - date
 *         - header
 *         - programDate
 *         - description
 *         - banner
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the notice
 *         date:
 *           type: string
 *           format: date
 *         header:
 *           type: string
 *         programDate:
 *           type: string
 *           format: date
 *         description:
 *           type: string
 *         link:
 *           type: string
 *         banner:
 *           type: string
 *           description: Banner image path
 *       example:
 *         date: "2024-07-01"
 *         header: "Programming Contest Announcement"
 *         programDate: "2024-07-15"
 *         description: "Join our annual programming contest!"
 *         link: "https://example.com"
 *         banner: "/images/notices/The_Professor.jpg"
 */

/**
 * @swagger
 * /api/notices:
 *   get:
 *     summary: Get all notices
 *     tags: [Notices]
 *     responses:
 *       200:
 *         description: List of notices
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Notice'
 *   post:
 *     summary: Create a new notice
 *     tags: [Notices]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Notice'
 *     responses:
 *       201:
 *         description: The created notice
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Notice'
 *
 * /api/notices/{id}:
 *   delete:
 *     summary: Delete a notice by ID
 *     tags: [Notices]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The notice ID
 *     responses:
 *       200:
 *         description: Notice deleted
 *       404:
 *         description: Notice not found
 */