/**
 * @swagger
 * tags:
 *   - name: Programmers
 *     description: Competitive programmers and rankings
 *
 * components:
 *   schemas:
 *     Programmer:
 *       type: object
 *       required:
 *         - name
 *         - handle
 *         - platform
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the programmer
 *         name:
 *           type: string
 *           description: Programmer's name
 *         handle:
 *           type: string
 *           description: Online judge handle/username
 *         platform:
 *           type: string
 *           description: Platform (e.g., Codeforces, AtCoder)
 *         rating:
 *           type: integer
 *           description: Current rating
 *         rank:
 *           type: string
 *           description: Platform rank or title
 *         profileUrl:
 *           type: string
 *           description: Profile URL
 *       example:
 *         name: "Alice"
 *         handle: "alice123"
 *         platform: "Codeforces"
 *         rating: 1800
 *         rank: "Candidate Master"
 *         profileUrl: "https://codeforces.com/profile/alice123"
 */

/**
 * @swagger
 * /api/programmers:
 *   get:
 *     summary: Get all programmers
 *     tags: [Programmers]
 *     responses:
 *       200:
 *         description: List of programmers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Programmer'
 *   post:
 *     summary: Add a new programmer
 *     tags: [Programmers]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Programmer'
 *     responses:
 *       201:
 *         description: The created programmer
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Programmer'
 *
 * /api/programmers/{id}:
 *   get:
 *     summary: Get a programmer by ID
 *     tags: [Programmers]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The programmer ID
 *     responses:
 *       200:
 *         description: The programmer data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Programmer'
 *       404:
 *         description: Programmer not found
 *   put:
 *     summary: Update a programmer by ID
 *     tags: [Programmers]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The programmer ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Programmer'
 *     responses:
 *       200:
 *         description: The updated programmer
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Programmer'
 *   delete:
 *     summary: Delete a programmer by ID
 *     tags: [Programmers]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The programmer ID
 *     responses:
 *       200:
 *         description: Programmer deleted
 *       404:
 *         description: Programmer not found
 */