public class XSS extends HttpServlet {
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
	throws ServletException, IOException {
		
		response.getWriter().print(
				"The page \"" + request.getParameter("page") + "\" was not found.");

	}
}