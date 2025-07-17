/**
 * @swagger
 * components:
 *   schemas:
 *     About:
 *       type: object
 *       required:
 *         - committee
 *         - studentCommittee
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the about document
 *         committee:
 *           type: object
 *           required:
 *             - president
 *             - vicePresident1
 *             - vicePresident2
 *             - treasurer
 *           properties:
 *             president:
 *               type: object
 *               required:
 *                 - name
 *                 - designation
 *               properties:
 *                 name:
 *                   type: string
 *                 designation:
 *                   type: string
 *             vicePresident1:
 *               type: object
 *               required:
 *                 - name
 *                 - designation
 *               properties:
 *                 name:
 *                   type: string
 *                 designation:
 *                   type: string
 *             vicePresident2:
 *               type: object
 *               required:
 *                 - name
 *                 - designation
 *               properties:
 *                 name:
 *                   type: string
 *                 designation:
 *                   type: string
 *             treasurer:
 *               type: object
 *               required:
 *                 - name
 *                 - designation
 *               properties:
 *                 name:
 *                   type: string
 *                 designation:
 *                   type: string
 *         studentCommittee:
 *           type: object
 *           required:
 *             - generalSecretary
 *             - assistantGeneralSecretary
 *             - officeSecretary
 *             - assistantOfficeSecretary
 *             - financeSecretary
 *             - assistantFinanceSecretary
 *             - publicationSecretary
 *             - assistantPublicationSecretary
 *             - socialWelfareSecretary
 *             - assistantSocialWelfareSecretary
 *           properties:
 *             generalSecretary:
 *               type: object
 *               required:
 *                 - name
 *                 - profileId
 *               properties:
 *                 name:
 *                   type: string
 *                 profileId:
 *                   type: string
 *             assistantGeneralSecretary:
 *               type: object
 *               required:
 *                 - name
 *                 - profileId
 *               properties:
 *                 name:
 *                   type: string
 *                 profileId:
 *                   type: string
 *             officeSecretary:
 *               type: object
 *               required:
 *                 - name
 *                 - profileId
 *               properties:
 *                 name:
 *                   type: string
 *                 profileId:
 *                   type: string
 *             assistantOfficeSecretary:
 *               type: object
 *               required:
 *                 - name
 *                 - profileId
 *               properties:
 *                 name:
 *                   type: string
 *                 profileId:
 *                   type: string
 *             financeSecretary:
 *               type: object
 *               required:
 *                 - name
 *                 - profileId
 *               properties:
 *                 name:
 *                   type: string
 *                 profileId:
 *                   type: string
 *             assistantFinanceSecretary:
 *               type: object
 *               required:
 *                 - name
 *                 - profileId
 *               properties:
 *                 name:
 *                   type: string
 *                 profileId:
 *                   type: string
 *             publicationSecretary:
 *               type: object
 *               required:
 *                 - name
 *                 - profileId
 *               properties:
 *                 name:
 *                   type: string
 *                 profileId:
 *                   type: string
 *             assistantPublicationSecretary:
 *               type: object
 *               required:
 *                 - name
 *                 - profileId
 *               properties:
 *                 name:
 *                   type: string
 *                 profileId:
 *                   type: string
 *             socialWelfareSecretary:
 *               type: object
 *               required:
 *                 - name
 *                 - profileId
 *               properties:
 *                 name:
 *                   type: string
 *                 profileId:
 *                   type: string
 *             assistantSocialWelfareSecretary:
 *               type: object
 *               required:
 *                 - name
 *                 - profileId
 *               properties:
 *                 name:
 *                   type: string
 *                 profileId:
 *                   type: string
 *       example:
 *         committee:
 *           president: { name: "Dr. A", designation: "President" }
 *           vicePresident1: { name: "Dr. B", designation: "Vice President 1" }
 *           vicePresident2: { name: "Dr. C", designation: "Vice President 2" }
 *           treasurer: { name: "Dr. D", designation: "Treasurer" }
 *         studentCommittee:
 *           generalSecretary: { name: "Student 1", profileId: "60d0fe4f5311236168a109ca" }
 *           assistantGeneralSecretary: { name: "Student 2", profileId: "60d0fe4f5311236168a109cb" }
 *           officeSecretary: { name: "Student 3", profileId: "60d0fe4f5311236168a109cc" }
 *           assistantOfficeSecretary: { name: "Student 4", profileId: "60d0fe4f5311236168a109cd" }
 *           financeSecretary: { name: "Student 5", profileId: "60d0fe4f5311236168a109ce" }
 *           assistantFinanceSecretary: { name: "Student 6", profileId: "60d0fe4f5311236168a109cf" }
 *           publicationSecretary: { name: "Student 7", profileId: "60d0fe4f5311236168a109d0" }
 *           assistantPublicationSecretary: { name: "Student 8", profileId: "60d0fe4f5311236168a109d1" }
 *           socialWelfareSecretary: { name: "Student 9", profileId: "60d0fe4f5311236168a109d2" }
 *           assistantSocialWelfareSecretary: { name: "Student 10", profileId: "60d0fe4f5311236168a109d3" }
 */

/**
 * @swagger
 * /api/about:
 *   get:
 *     summary: Get all committee information
 *     tags: [About]
 *     responses:
 *       200:
 *         description: List of all committee information
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/About'
 *
 *   post:
 *     summary: Create a new committee
 *     tags: [About]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: header
 *         name: x-auth-token
 *         schema:
 *           type: string
 *         required: true
 *         description: JWT token for authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/About'
 *     responses:
 *       200:
 *         description: The created committee
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/About'
 */

/**
 * @swagger
 * /api/about/{id}:
 *   put:
 *     summary: Update an existing committee by ID
 *     tags: [About]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The committee ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/About'
 *     responses:
 *       200:
 *         description: The updated committee
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/About'
 */