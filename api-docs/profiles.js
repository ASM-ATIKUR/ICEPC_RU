/**
 * @swagger
 * tags:
 *   - name: Profiles
 *     description: User profiles and member information
 *
 * components:
 *   schemas:
 *     Profile:
 *       type: object
 *       required:
 *         - name
 *         - email
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the profile
 *         name:
 *           type: string
 *           description: Member's name
 *         email:
 *           type: string
 *           description: Member's email address
 *         contacts:
 *           type: array
 *           items:
 *             type: string
 *           description: List of contact numbers
 *         batch:
 *           type: string
 *           description: Academic batch or year
 *         image:
 *           type: string
 *           description: Profile image URL or path
 *       example:
 *         name: "John Doe"
 *         email: "john@example.com"
 *         contacts: ["01700000000"]
 *         batch: "2020"
 *         image: "/images/profiles/john.jpg"
 */

/**
 * @swagger
 * /api/profiles:
 *   get:
 *     summary: Get all profiles
 *     tags: [Profiles]
 *     responses:
 *       200:
 *         description: List of profiles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Profile'
 *   post:
 *     summary: Create a new profile
 *     tags: [Profiles]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Profile'
 *     responses:
 *       201:
 *         description: The created profile
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profile'
 *
 * /api/profiles/{id}:
 *   get:
 *     summary: Get a profile by ID
 *     tags: [Profiles]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The profile ID
 *     responses:
 *       200:
 *         description: The profile data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profile'
 *       404:
 *         description: Profile not found
 *   put:
 *     summary: Update a profile by ID
 *     tags: [Profiles]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The profile ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Profile'
 *     responses:
 *       200:
 *         description: The updated profile
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profile'
 *   delete:
 *     summary: Delete a profile by ID
 *     tags: [Profiles]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The profile ID
 *     responses:
 *       200:
 *         description: Profile deleted
 *       404:
 *         description: Profile not found
 */