<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: POST,GET,PUT,DELETE, OPTIONS");
header("Access-Control-Allow-Headers: *");
require APPPATH . '/libraries/REST_Controller.php';
use Restserver\Libraries\REST_Controller;

class Bookings extends REST_Controller {
    
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
	public function index_get($user_id = 0,$booking_id=0,$status='')
	{
        if(!empty($user_id)){
             $array = array('status' =>$status,'u_id'=>$user_id);
               $this->db->where($array);
               
            $data = $this->db->get("booking")->result();
           // $data = $this->db->get_where("booking", ['id' => $id])->result();
        } else if(!empty($booking_id))
            {
                 $array = array('status' =>$status,'id'=>$booking_id);
               $this->db->where($array);
               
            $data = $this->db->get("booking")->result();           
            }

        else{
            $array = array('status' =>$status);
               $this->db->where($array);
               
            $data = $this->db->get("booking")->result();
            //$data = $this->db->get("booking")->result();
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
         $servicename = $this->input->post('service_name');
         //print_r($this->input->post());
         $price = $this->input->post('price');
         $address = $this->input->post('address');
         $quantity = $this->input->post('quantity');
         $u_id = $this->input->post('u_id');
         $paid_amount = $price*$quantity;
         $name = $this->input->post('username');
         $email = $this->input->post('email');
         if($quantity=="")
         {
            array("data" => "Quantity Required","msg"=>"error");
         }
         else if($address=="")
         {
            array("data" => "Address Required","msg"=>"error");
         }
         else{

         $post_data = array('username'=>$name,'email'=>$email,'serv_name'=>$servicename,'u_id'=>$u_id,'price'=>$price,'quantity'=>$quantity,'address'=>$address,'paid_amount'=>$paid_amount);

         $this->db->insert('booking',$post_data);
        $data = array("data" => "Order Placed Successfully","msg"=>"success");
    }
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
        $this->db->update('booking', $input, array('id'=>$id));
     
        $this->response(['Item updated successfully.'], REST_Controller::HTTP_OK);
    }
     
    /**
     * Get All Data from this method.
     *
     * @return Response
    */
    public function index_delete($id)
    {
        $this->db->delete('booking', array('id'=>$id));
       
        $this->response(['Item deleted successfully.'], REST_Controller::HTTP_OK);
    }
    	
}