<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
require APPPATH . '/libraries/REST_Controller.php';
use Restserver\Libraries\REST_Controller;

class Reports extends REST_Controller {
    
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
       $from = $this->input->post('from');
       $to = $this->input->post('to');
      
        //$input = $this->input->post();
         if($from=="")
         {
             $data = array("data" => "Please Select from Date!","msg"=>"error");
         }
         else if($to=="")
         {
            $data = array("data" => "Please Select To Date!","msg"=>"error");
         }
         
         else{
             $array = array('placed_at >='=>$from,'placed_at <='=>$to);    
             $this->db->where($array);
            $result = $this->db->get("booking")->result();
           
           if($result!=null){
            $data = array("data"=>$result,"msg"=>"success");
            }
            else{
                $data= array("data" => "No Data Found in Given Time Frame","msg"=>"error");
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