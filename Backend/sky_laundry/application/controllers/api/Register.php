<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
require APPPATH . '/libraries/REST_Controller.php';
use Restserver\Libraries\REST_Controller;

class Register extends REST_Controller {
    
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
            $data = $this->db->get_where("users", ['user_id' => $id])->result();
        }
        else{
            $array = array('role!=' => '1');
            $this->db->where($array);
            $data = $this->db->get("users")->result();
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
        $email = $this->input->post('username');
         $password = $this->input->post('password');
         $phone = $this->input->post('phone');
        if($name=="")
        {
           $data = array("data" => "Name Required","msg"=>"error");
        }
        elseif ($email=="") {
           $data = array("data" => "Email Required","msg"=>"error");
        }
        elseif ($phone=="") {
            $data = array("data" => "Phone# Required","msg"=>"error");
        }
        elseif ($password=="") {
            $data = array("data" => "Password Required","msg"=>"error");
        }
        else{
         $post_data = array('name'=>$name,'email'=>$email,'password'=>$password,'cellno'=>$phone,'role'=>3);

         $this->db->insert('users',$post_data);
        $data = array("data" => "User Registered Successfully","msg"=>"success");
    }
        print json_encode($data);
       
       // print json_encode($data);
    } 
     
    /**
     * Get All Data from this method.
     *
     * @return Response
    */
    public function index_put($id)
    {
        $input = $this->put();
        $this->db->update('users', $input, array('user_id'=>$id));
     
        $this->response(['Item updated successfully.'], REST_Controller::HTTP_OK);
    }
     
    /**
     * Get All Data from this method.
     *
     * @return Response
    */
    public function index_delete($id)
    {
        $this->db->delete('users', array('user_id'=>$id));
       
        $this->response(['Item deleted successfully.'], REST_Controller::HTTP_OK);
    }
    	
}