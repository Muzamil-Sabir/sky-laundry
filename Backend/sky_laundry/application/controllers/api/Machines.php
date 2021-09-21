<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: POST,GET,PUT,DELETE, OPTIONS");
header("Access-Control-Allow-Headers: *");
require APPPATH . '/libraries/REST_Controller.php';
use Restserver\Libraries\REST_Controller;

class Machines extends REST_Controller {
    
	  /**
     * Get All Data from this method.
     *
     * @return Response
    */
    public function __construct(){
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
	public function index_get($id = 0,$status='')
	{
         if(!empty($id)){
            $data = $this->db->get_where("machines", ['id' => $id])->result();
        }else{
            $data = $this->db->get("machines")->result();
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
         $machinename = $this->input->post('machinename');
         //print_r($this->input->post());
         $type = $this->input->post('type');
         $availability = $this->input->post('availability');
        
         $post_data = array('name'=>$machinename,'type'=>$type,'availability'=>$availability);

         $this->db->insert('machines',$post_data);
        $data = array("data" => "Machine Added Successfully","msg"=>"success");
        print json_encode($data);
        // $input = $this->input->post();
        // $this->db->insert('booking',$input);
     
        // $this->response(['Item created successfully.'], REST_Controller::HTTP_OK);
    } 
     
    /**
     * Get All Data from this method.
     *
     * @return Response
    */
    public function index_put($id)
    {
        $input = $this->put();
        $this->db->update('machines', $input, array('id'=>$id));
     
        $this->response(['Item updated successfully.'], REST_Controller::HTTP_OK);
    }
     
    /**
     * Get All Data from this method.
     *
     * @return Response
    */
    public function index_delete($id)
    {
        $this->db->delete('machines', array('id'=>$id));
       
        $this->response(['Item deleted successfully.'], REST_Controller::HTTP_OK);
    }
    	
}