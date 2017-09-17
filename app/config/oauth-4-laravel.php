<?php

return array( 

    'storage' => 'Session', 

    'consumers' => array(

        // Desarrollo
        // 'Facebook' => array(
        //     'client_id'     => '248140975609238',
        //     'client_secret' => '42bf5b9293a6d8c62dfbe211ec6a4329',
        //     'scope'         => array('email'),
        // ),

        // Producción
        'Facebook' => array(
            'client_id'     => '1299387163451318',
            'client_secret' => 'e564e95918420448b7b102e3d307a8e9',
            'scope'         => array('email'),
        ),

        // Producción
        'Google' => array(
			'client_id'     => '288270581971-drpqt5f5269uthdcvr3nk9g7ua7ieq6i.apps.googleusercontent.com',
			'client_secret' => 'NeeY0Bkqa3bv7gf_sros-D7d',
			'scope'         => array('userinfo_email', 'userinfo_profile'),
		),  

    )

);