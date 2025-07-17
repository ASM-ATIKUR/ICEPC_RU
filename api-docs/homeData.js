/**
 * @swagger
 * tags:
 *   - name: HomeData
 *     description: Home page dynamic data
 *
 * components:
 *   schemas:
 *     HomeData:
 *       type: object
 *       required:
 *         - title
 *         - subtitle
 *         - banner
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the home data
 *         title:
 *           type: string
 *           description: Main title for the home page
 *         subtitle:
 *           type: string
 *           description: Subtitle or tagline
 *         banner:
 *           type: string
 *           description: Banner image path or URL
 *         highlights:
 *           type: array
 *           items:
 *             type: string
 *           description: List of highlights or features
 *       example:
 *         title: "ICE Programming Club"
 *         subtitle: "Empowering Coders"
 *         banner: "/images/home/banner.jpg"
 *         highlights: ["Contests", "Workshops", "Resources"]
 */

/**
 * @swagger
 * /api/homeData:
 *   get:
 *     summary: Get home page data
 *     tags: [HomeData]
 *     responses:
 *       200:
 *         description: Home page data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HomeData'
 *   post:
 *     summary: Create or update home page data
 *     tags: [HomeData]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/HomeData'
 *     responses:
 *       200:
 *         description: The created or updated home data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HomeData'
 */