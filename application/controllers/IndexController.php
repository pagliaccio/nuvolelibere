<?php

class IndexController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
    }

    public function indexAction()
    {
        $auth=Zend_Auth::getInstance();
        if ($auth->hasIdentity()) $this->view->user=$auth->getIdentity()->username;
        else $this->view->user=Model_guest::getgid();
    }


}

