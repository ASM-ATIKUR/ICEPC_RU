/**
 * @swagger
 * tags:
 *   - name: Photos
 *     description: Gallery photos and images
 *
 * components:
 *   schemas:
 *     Photo:
 *       type: object
 *       required:
 *         - url
 *         - caption
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the photo
 *         url:
 *           type: string
 *           description: Image URL or path
 *         caption:
 *           type: string
 *           description: Photo caption or description
 *         uploadedAt:
 *           type: string
 *           format: date-time
 *           description: Upload date and time
 *       example:
 *         url: "/images/gallery/photo1.jpg"
 *         caption: "Prize Giving Ceremony"
 *         uploadedAt: "2025-07-17T12:00:00Z"
 */

/**
 * @swagger
 * /api/photos:
 *   get:
 *     summary: Get all photos
 *     tags: [Photos]
 *     responses:
 *       200:
 *         description: List of photos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Photo'
 *   post:
 *     summary: Upload a new photo
 *     tags: [Photos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Photo'
 *     responses:
 *       201:
 *         description: The uploaded photo
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Photo'
 *
 * /api/photos/{id}:
 *   delete:
 *     summary: Delete a photo by ID
 *     tags: [Photos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The photo ID
 *     responses:
 *       200:
 *         description: Photo deleted
 *       404:
 *         description: Photo not found
 */