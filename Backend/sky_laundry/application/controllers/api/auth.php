<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
require APPPATH . '/libraries/REST_Controller.php';
use Restserver\Libraries\REST_Controller;

class auth extends REST_Controller {
    
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
       $username = $this->input->post('username');
       $password = $this->input->post('password');
      
        //$input = $this->input->post();
         if($username=="")
         {
             $data = array("data" => "Username Required!","msg"=>"error");
         }
         else if($password=="")
         {
            $data = array("data" => "Password Required!","msg"=>"error");
         }
         
         else{
             $array = array('email'=>$username,'password'=>$password);    
             $this->db->where($array);
            $result = $this->db->get("users")->result();
           
            if($result!=null){
            $data = array("data"=>$result,"msg"=>"success");
            }
            else{
                 $data = array("data" => "Error!","msg"=>"error");
            }
           
            
      
        }
        $this->response($data, REST_Controller::HTTP_OK);
       
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