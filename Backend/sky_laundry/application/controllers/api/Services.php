<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: POST,GET,PUT,DELETE, OPTIONS");
header("Access-Control-Allow-Headers: *");

require APPPATH . '/libraries/REST_Controller.php';
use Restserver\Libraries\REST_Controller;

class Services extends REST_Controller {
    
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
            $data = $this->db->get_where("services", ['id' => $id])->result();
        }else{
            $data = $this->db->get("services")->result();
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
        $servicename = $this->input->post('servicename');
        $description = $this->input->post('description');
         $price = $this->input->post('price');
        //$input = $this->input->post();
         if($servicename=="")
         {
             $data = array("data" => "Service name required!","msg"=>"error");
         }
         else if($description=="")
         {
            $data = array("data" => "Service description Required!","msg"=>"error");
         }
         elseif($price=="")
         {
            $data = array("data" => "Service Price Required!","msg"=>"error");
         }
         else{
        $post_data = array('name'=> $servicename,'descr'=>$description,'price'=>$price);
        $this->db->insert('services',$post_data);
        $data = array("data" => "Service added Successfully","msg"=>"success");
        }
        print json_encode($data);
       // $this->response(['success.'], REST_Controller::HTTP_OK);
    } 
     
    /**
     * Get All Data from this method.
     *
     * @return Response
    */
   public function index_put($id)
    {
        $input = $this->put();
        $this->db->update('services', $input, array('id'=>$id));
        // $this->response($data, REST_Controller::HTTP_OK);
        //$this->response(['"success'], REST_Controller::HTTP_OK);
        $data=array("msg"=>"success","data"=>"Service Updated Successfully");
        print json_encode($data);
    }
     
    /**
     * Get All Data from this method.
     *
     * @return Response
    */
    public function index_delete($id)
    {
        $this->db->delete('services', array('id'=>$id));
       
        $this->response(['Item deleted successfully.'], REST_Controller::HTTP_OK);
    }
    	
}