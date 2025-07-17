/**
 * @swagger
 * tags:
 *   - name: Resources
 *     description: Programming resources, tutorials, and links
 *
 * components:
 *   schemas:
 *     Resource:
 *       type: object
 *       required:
 *         - title
 *         - url
 *         - category
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the resource
 *         title:
 *           type: string
 *           description: Resource title
 *         url:
 *           type: string
 *           description: Resource URL
 *         category:
 *           type: string
 *           description: Resource category (e.g., tutorial, book, video)
 *         description:
 *           type: string
 *           description: Short description of the resource
 *       example:
 *         title: "JavaScript Info"
 *         url: "https://javascript.info/"
 *         category: "tutorial"
 *         description: "Comprehensive JavaScript tutorial and reference"
 */

/**
 * @swagger
 * /api/resources:
 *   get:
 *     summary: Get all resources
 *     tags: [Resources]
 *     responses:
 *       200:
 *         description: List of resources
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Resource'
 *   post:
 *     summary: Add a new resource
 *     tags: [Resources]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Resource'
 *     responses:
 *       201:
 *         description: The created resource
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Resource'
 *
 * /api/resources/{id}:
 *   get:
 *     summary: Get a resource by ID
 *     tags: [Resources]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The resource ID
 *     responses:
 *       200:
 *         description: The resource data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Resource'
 *       404:
 *         description: Resource not found
 *   put:
 *     summary: Update a resource by ID
 *     tags: [Resources]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The resource ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Resource'
 *     responses:
 *       200:
 *         description: The updated resource
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Resource'
 *   delete:
 *     summary: Delete a resource by ID
 *     tags: [Resources]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The resource ID
 *     responses:
 *       200:
 *         description: Resource deleted
 *       404:
 *         description: Resource not found
 */