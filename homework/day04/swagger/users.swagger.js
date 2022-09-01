/**
 * @swagger
 * /users:
 *  get:
 *    summary: 회원 목록 조회하기
 *    tags: [Users]
 *    responses:
 *      200:
 *        description : 성공
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *               properties:
 *               number:
 *                  type: int
 *                  example: 1
 *               writer:
 *                  type: string
 *                  example: 철수
 *               title:
 *                  type: string
 *                  example: 좋은 아침입니다~
 *               contents:
 *                type: string
 *                example: 오늘 하루도 화이팅하세요!
 */

/**
 * @swagger
 * /boards:
 *   post:
 *      summary: 게시글 등록하기
 *      tags : [Board]
 *      responses:
 *      200:
 *      description : 성공
 */
