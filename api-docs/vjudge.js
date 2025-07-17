/**
 * @swagger
 * tags:
 *   - name: VJudge
 *     description: Virtual judge contests and standings
 *
 * components:
 *   schemas:
 *     VJudgeContest:
 *       type: object
 *       required:
 *         - name
 *         - url
 *         - startTime
 *         - endTime
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the vjudge contest
 *         name:
 *           type: string
 *           description: Contest name
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
 *         standings:
 *           type: array
 *           description: Standings for the contest
 *           items:
 *             type: object
 *             properties:
 *               handle:
 *                 type: string
 *               solved:
 *                 type: integer
 *               penalty:
 *                 type: integer
 *       example:
 *         name: "ICEPC VJudge July"
 *         url: "https://vjudge.net/contest/12345"
 *         startTime: "2025-07-25T10:00:00Z"
 *         endTime: "2025-07-25T13:00:00Z"
 *         standings:
 *           - handle: "alice"
 *             solved: 5
 *             penalty: 600
 *           - handle: "bob"
 *             solved: 4
 *             penalty: 900
 */

/**
 * @swagger
 * /api/vjudge:
 *   get:
 *     summary: Get all VJudge contests
 *     tags: [VJudge]
 *     responses:
 *       200:
 *         description: List of VJudge contests
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/VJudgeContest'
 *   post:
 *     summary: Create a new VJudge contest
 *     tags: [VJudge]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/VJudgeContest'
 *     responses:
 *       201:
 *         description: The created VJudge contest
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/VJudgeContest'
 *
 * /api/vjudge/{id}:
 *   get:
 *     summary: Get a VJudge contest by ID
 *     tags: [VJudge]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The VJudge contest ID
 *     responses:
 *       200:
 *         description: The VJudge contest data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/VJudgeContest'
 *       404:
 *         description: VJudge contest not found
 *   put:
 *     summary: Update a VJudge contest by ID
 *     tags: [VJudge]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The VJudge contest ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/VJudgeContest'
 *     responses:
 *       200:
 *         description: The updated VJudge contest
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/VJudgeContest'
 *   delete:
 *     summary: Delete a VJudge contest by ID
 *     tags: [VJudge]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The VJudge contest ID
 *     responses:
 *       200:
 *         description: VJudge contest deleted
 *       404:
 *         description: VJudge contest not found
 */