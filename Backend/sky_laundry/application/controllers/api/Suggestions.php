<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: POST,GET,PUT,DELETE, OPTIONS");
header("Access-Control-Allow-Headers: *");

require APPPATH . '/libraries/REST_Controller.php';
use Restserver\Libraries\REST_Controller;

class Suggestions extends REST_Controller {
    
	  /**
     * Get All Data from this method.
     *
     * @return Response
    */
    public function __construct() {
       parent::__construct();
       Header('Access-Control-Allow-Origin: *'); //for allow any domain, insecure
                Header('Access-Control-Allow-Headers: *'); //for allow any headers, insecure
                Header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE'); //method allowed
       // print(APPPATH . '/libraries/REST_Controller.php');
       $this->load->database();
    }
       
    /**
     * Get All Data from this method.
     *
     * @return Response
    */
	public function index_get($id = 0)
	{
        if(!empty($id)){
            $data = $this->db->get_where("suggestions", ['query_id' => $id])->result();
        }else{
            $data = $this->db->get("suggestions")->result();
        }
     
        $this->response($data, REST_Controller::HTTP_OK);
	}
      
    /**
     * Get All Data from this method.
     *
     * @return Response
    */
    public function index_post()
    {
        $name = $this->input->post('name');
        $email = $this->input->post('email');
         $subject = $this->input->post('subject');
         $message = $this->input->post('message');
        //$input = $this->input->post();
         if($name=="")
         {
             $data = array("data" => "Name required!","msg"=>"error");
         }
         else if($email=="")
         {
            $data = array("data" => "Email Required!","msg"=>"error");
         }
         elseif($subject=="")
         {
            $data = array("data" => "Subject Required!","msg"=>"error");
         }
         elseif($message=="")
         {
            $data = array("data" => "Message Required!","msg"=>"error");
         }
         else{
        $post_data = array('name'=> $name,'email'=>$email,'subject'=>$subject,'message'=>$message);
        $this->db->insert('suggestions',$post_data);
        $data = array("data" => "Suggestions Submitted Successfully","msg"=>"success");
        }
        print json_encode($data);
    } 
     

}