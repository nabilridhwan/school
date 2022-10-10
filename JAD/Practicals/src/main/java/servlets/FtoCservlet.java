package servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Invocation;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * Servlet implementation class FtoCservlet
 */
@WebServlet("/FtoCservlet")
public class FtoCservlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public FtoCservlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		PrintWriter out = response.getWriter();
		String v1 = request.getParameter("fah");
		Client client = ClientBuilder.newClient();
		String restUrl = "http://localhost:8080/Practicals/TempConvertWS";
		
		WebTarget target = client.target(restUrl).path("FtoC").queryParam("fah", v1);
		
		Invocation.Builder invocationBuilder = target.request(MediaType.APPLICATION_JSON);
		Response resp = invocationBuilder.post(null);
		
		System.out.println("status: " + resp.getStatus());
		
		if(resp.getStatus() == Response.Status.OK.getStatusCode()) {
			double result = (double) resp.readEntity(double.class);
			
			out.println("<br>Celsius: " + result + "<br>");
			
			request.setAttribute("req_res", result);
			request.setAttribute("req_fah", v1);
			
			System.out.println("request Obj set.. forwarding..");
			String url = "prac7/part5/tempConvertClient.jsp";
			
			RequestDispatcher dispatch = request.getRequestDispatcher(url);
			dispatch.forward(request, response);
			
			
		}else {
			System.out.println("failed");
			String url = "prac7/part5/tempConvertClient.jsp";
			
			request.setAttribute("err", "NotFound");
			
			RequestDispatcher dispatch = request.getRequestDispatcher(url);
			dispatch.forward(request, response);
		}
		
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
