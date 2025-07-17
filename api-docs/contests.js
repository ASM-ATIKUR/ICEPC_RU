/**
 * @swagger
 * tags:
 *   - name: Contests
 *     description: Programming contests and events
 *
 * components:
 *   schemas:
 *     Contest:
 *       type: object
 *       required:
 *         - name
 *         - platform
 *         - url
 *         - startTime
 *         - endTime
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the contest
 *         name:
 *           type: string
 *           description: Contest name
 *         platform:
 *           type: string
 *           description: Contest platform (e.g., Codeforces, AtCoder)
 *         url:
 *           type: string
 *           description: Contest URL
 *         startTime:
 *           type: string
 *           format: date-time
 *           description: Contest start time
 *         endTime:
 *           type: string
 *           format: date-time
 *           description: Contest end time
 *         duration:
 *           type: string
 *           description: Contest duration
 *       example:
 *         name: "Codeforces Round #900"
 *         platform: "Codeforces"
 *         url: "https://codeforces.com/contest/900"
 *         startTime: "2025-07-20T14:00:00Z"
 *         endTime: "2025-07-20T16:00:00Z"
 *         duration: "2:00"
 */

/**
 * @swagger
 * /api/contests:
 *   get:
 *     summary: Get all contests
 *     tags: [Contests]
 *     responses:
 *       200:
 *         description: List of contests
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Contest'
 *   post:
 *     summary: Create a new contest
 *     tags: [Contests]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contest'
 *     responses:
 *       201:
 *         description: The created contest
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contest'
 *
 * /api/contests/{id}:
 *   get:
 *     summary: Get a contest by ID
 *     tags: [Contests]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The contest ID
 *     responses:
 *       200:
 *         description: The contest data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contest'
 *       404:
 *         description: Contest not found
 *   put:
 *     summary: Update a contest by ID
 *     tags: [Contests]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The contest ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contest'
 *     responses:
 *       200:
 *         description: The updated contest
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contest'
 *   delete:
 *     summary: Delete a contest by ID
 *     tags: [Contests]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The contest ID
 *     responses:
 *       200:
 *         description: Contest deleted
 *       404:
 *         description: Contest not found
 */