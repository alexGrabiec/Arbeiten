<?php

require "vendor/autoload.php";


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$Firma = $_POST['Firma'];
$Namea = $_POST['Name'];
$Maila = $_POST['Mail'];
$Telefona = $_POST['Telefon'];
$Nachrichta = $_POST['Nachricht'];
$br = ' ';



$developmentMode = true;
$mailer = new PHPMailer($developmentMode);

try {
    $mailer->SMTPDebug = 2;
    $mailer->isSMTP();

    if ($developmentMode) {
        $mailer->SMTPOptions = [
            'ssl'=> [
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
            ]
        ];
    }


    $mailer->Host = 'smtp.web.de';
    $mailer->SMTPAuth = true;
    $mailer->Username = 'goblintter07@web.de';
    $mailer->Password = 'eistee009';
    $mailer->SMTPSecure = 'tls';
    $mailer->Port = 587;

    $mailer->setFrom('goblintter07@web.de', 'Alex Grabiec');
    $mailer->addAddress('pressrewind.fkb@gmail.com', 'Alex Grabiec');

    $mailer->isHTML(true);
    $mailer->Subject = 'Kundennachricht (Kontaktformular)';
    $mailer->Body = $Firma . $br . $Namea .$br . $Telefona .$br . $Nachrichta;

    $mailer->send();
    $mailer->ClearAllRecipients();
    echo "MAIL HAS BEEN SENT SUCCESSFULLY";
    header('Location: https://www.youtube.com/watch?v=4q0gYjAVonI'); ///////////////////////////////STARTSEITE NACH SUBMIT

} catch (Exception $e) {
    echo "EMAIL SENDING FAILED. INFO: " . $mailer->ErrorInfo;
}
?>
