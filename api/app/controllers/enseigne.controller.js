const Enseigne = require('../models/enseigne.model.js');
const SibApiV3Sdk = require("sib-api-v3-sdk");

// Create and Save a new Enseigne
exports.create = (req, res) => {
// Validate request
    if(!req.body.name) {
            return res.status(400).send({
                message: "You have to name it"
        });
    }

// Create an Enseigne
const enseigne = new Enseigne({
    name:req.body.name.toLowerCase(),
    email:req.body.email,
    phone:req.body.phone,
    address:req.body.address,
    imageURL:req.body.imageURL
});



    //For handling emails
    const SibApiV3Sdk = require("sib-api-v3-sdk");
    let defaultClient = SibApiV3Sdk.ApiClient.instance;
// Configure API key authorization: api-key
    let apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey =
        "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";

     function SendTestEmail() {
         //     var apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
         //     var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); // SendSmtpEmail | Values to send a transactional email
         //     sendSmtpEmail = {
         //         sender: { email: "noubarbara@gmail.com" },
         //         to: [
         //             {
         //                 email: "bgtheodore18@gmail.com",
         //                 //aanaya.nouhaila.emsi@gmail.com
         //                 // bgtheodore18@gmail.com
         //                 // kevindubuche@gmail.com
         //                 // nouhaila.aanaya@etu.univ-cotedazur.fr
         //                 name: req.body.name,
         //             },
         //         ],
         //         subject: "Test Email",
         //         textContent: "Saluuuuut " + req.body.name,
         //     };
         //     apiInstance.sendTransacEmail(sendSmtpEmail).then(
         //         function (data) {
         //             console.log("API called successfully. Returned data: " + data);
         //         },
         //         function (error) {
         //             console.error(error);
         //         }
         //     );
         // }

         let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

         let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

         sendSmtpEmail.subject = "Suggestion de l'enseigne {{params.parameter}}";
         sendSmtpEmail.htmlContent = "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">\n" +
             "<html xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:v=\"urn:schemas-microsoft-com:vml\" xmlns:o=\"urn:schemas-microsoft-com:office:office\"><head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"format-detection\" content=\"telephone=no\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><title></title><style type=\"text/css\" emogrify=\"no\">#outlook a { padding:0; } .ExternalClass { width:100%; } .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div { line-height: 100%; } table td { border-collapse: collapse; mso-line-height-rule: exactly; } .editable.image { font-size: 0 !important; line-height: 0 !important; } .nl2go_preheader { display: none !important; mso-hide:all !important; mso-line-height-rule: exactly; visibility: hidden !important; line-height: 0px !important; font-size: 0px !important; } body { width:100% !important; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; margin:0; padding:0; } img { outline:none; text-decoration:none; -ms-interpolation-mode: bicubic; } a img { border:none; } table { border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; } th { font-weight: normal; text-align: left; } *[class=\"gmail-fix\"] { display: none !important; } </style><style type=\"text/css\" emogrify=\"no\"> @media (max-width: 600px) { .gmx-killpill { content: ' \\03D1';} } </style><style type=\"text/css\" emogrify=\"no\">@media (max-width: 600px) { .gmx-killpill { content: ' \\03D1';} .r0-c { box-sizing: border-box !important; width: 100% !important } .r1-o { border-style: solid !important; width: 100% !important } .r2-i { background-color: transparent !important } .r3-c { box-sizing: border-box !important; text-align: center !important; valign: top !important; width: 320px !important } .r4-o { border-style: solid !important; margin: 0 auto 0 auto !important; width: 320px !important } .r5-i { padding-bottom: 5px !important; padding-top: 5px !important } .r6-c { box-sizing: border-box !important; display: block !important; valign: top !important; width: 100% !important } .r7-i { padding-left: 0px !important; padding-right: 0px !important } .r8-c { box-sizing: border-box !important; text-align: center !important; width: 100% !important } .r9-o { border-style: solid !important; margin: 0 auto 0 auto !important; width: 100% !important } .r10-i { padding-left: 10px !important; padding-right: 10px !important; text-align: center !important } .r11-c { box-sizing: border-box !important; text-align: center !important; valign: top !important; width: 100% !important } .r12-i { background-color: #ffffff !important; padding-bottom: 20px !important; padding-left: 15px !important; padding-right: 15px !important; padding-top: 20px !important } .r13-c { box-sizing: border-box !important; text-align: center !important; valign: top !important; width: 200px !important } .r14-o { background-size: auto !important; border-style: solid !important; margin: 0 auto 0 auto !important; width: 200px !important } .r15-i { padding-bottom: 15px !important; padding-top: 15px !important } .r16-i { background-color: #ffffff !important; padding-bottom: 20px !important; padding-left: 0px !important; padding-right: 0px !important; padding-top: 20px !important } .r17-c { box-sizing: border-box !important; text-align: left !important; valign: top !important; width: 100% !important } .r18-o { border-style: solid !important; margin: 0 auto 0 0 !important; width: 100% !important } .r19-i { padding-top: 15px !important; text-align: center !important } .r20-o { background-size: auto !important; border-style: solid !important; margin: 0 auto 0 auto !important; width: 100% !important } .r21-i { padding-bottom: 15px !important; padding-left: 0px !important; padding-right: 0px !important; padding-top: 15px !important } .r22-i { padding-top: 15px !important; text-align: left !important } .r23-i { padding-bottom: 15px !important; padding-top: 15px !important; text-align: left !important } .r24-o { border-style: solid !important; margin: 0 auto 0 auto !important; margin-bottom: 15px !important; margin-top: 15px !important; width: 100% !important } .r25-i { text-align: center !important } .r26-r { background-color: #0092FF !important; border-radius: 4px !important; border-width: 0px !important; box-sizing: border-box; height: initial !important; padding-bottom: 12px !important; padding-left: 5px !important; padding-right: 5px !important; padding-top: 12px !important; text-align: center !important; width: 100% !important } .r27-i { background-color: #eff2f7 !important; padding-bottom: 20px !important; padding-left: 15px !important; padding-right: 15px !important; padding-top: 20px !important } .r28-i { padding-bottom: 0px !important; padding-top: 15px !important; text-align: center !important } .r29-i { padding-bottom: 0px !important; padding-top: 0px !important; text-align: center !important } .r30-i { padding-bottom: 15px !important; padding-left: 0px !important; padding-right: 0px !important; padding-top: 0px !important } .r31-c { box-sizing: border-box !important; text-align: center !important; valign: top !important; width: 129px !important } .r32-o { border-style: solid !important; margin: 0 auto 0 auto !important; width: 129px !important } body { -webkit-text-size-adjust: none } .nl2go-responsive-hide { display: none } .nl2go-body-table { min-width: unset !important } .mobshow { height: auto !important; overflow: visible !important; max-height: unset !important; visibility: visible !important; border: none !important } .resp-table { display: inline-table !important } .magic-resp { display: table-cell !important } } </style><!--[if !mso]><!--><style type=\"text/css\" emogrify=\"no\">@import url(\"https://fonts.googleapis.com/css2?family=Montserrat\"); </style><!--<![endif]--><style type=\"text/css\">p, h1, h2, h3, h4, ol, ul { margin: 0; } a, a:link { color: #0092ff; text-decoration: underline } .nl2go-default-textstyle { color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; line-height: 1.5 } .default-button { border-radius: 4px; color: #ffffff; font-family: arial,helvetica,sans-serif; font-size: 16px; line-height: 1.15; text-decoration: none; width: 50% } .default-heading1 { color: #1F2D3D; font-family: arial,helvetica,sans-serif; font-size: 36px } .default-heading2 { color: #1F2D3D; font-family: arial,helvetica,sans-serif; font-size: 32px } .default-heading3 { color: #1F2D3D; font-family: arial,helvetica,sans-serif; font-size: 24px } .default-heading4 { color: #1F2D3D; font-family: arial,helvetica,sans-serif; font-size: 18px } a[x-apple-data-detectors] { color: inherit !important; text-decoration: inherit !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important; } .no-show-for-you { border: none; display: none; float: none; font-size: 0; height: 0; line-height: 0; max-height: 0; mso-hide: all; overflow: hidden; table-layout: fixed; visibility: hidden; width: 0; } </style><!--[if mso]><xml> <o:OfficeDocumentSettings> <o:AllowPNG/> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings> </xml><![endif]--><style type=\"text/css\">a:link{color: #0092ff; text-decoration: underline}</style></head><body text=\"#3b3f44\" link=\"#0092ff\" yahoo=\"fix\" style=\"\"> <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" role=\"presentation\" class=\"nl2go-body-table\" width=\"100%\" style=\"width: 100%;\"><tr><td align=\"\" class=\"r0-c\"> <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" role=\"presentation\" width=\"100%\" class=\"r1-o\" style=\"table-layout: fixed; width: 100%;\"><!-- --><tr><td valign=\"top\" class=\"r2-i\" style=\"background-color: transparent;\"> <table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" role=\"presentation\"><tr><td class=\"r3-c\" align=\"center\"> <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" role=\"presentation\" width=\"600\" class=\"r4-o\" style=\"table-layout: fixed;\"><!-- --><tr class=\"nl2go-responsive-hide\"><td height=\"5\" style=\"font-size: 5px; line-height: 5px;\">­</td> </tr><tr><td class=\"r5-i\"> <table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" role=\"presentation\"><tr><th width=\"100%\" valign=\"top\" class=\"r6-c\"> <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" role=\"presentation\" width=\"100%\" class=\"r1-o\" style=\"table-layout: fixed; width: 100%;\"><!-- --><tr><td class=\"nl2go-responsive-hide\" width=\"10\" style=\"font-size: 0px; line-height: 1px;\">­ </td> <td valign=\"top\" class=\"r7-i\"> <table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" role=\"presentation\"><tr><td class=\"r8-c\" align=\"center\"> <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" role=\"presentation\" width=\"100%\" class=\"r9-o\" style=\"table-layout: fixed; width: 100%;\"><tr><td class=\"nl2go-responsive-hide\" width=\"30\" style=\"font-size: 0px; line-height: 1px;\">­ </td> <td align=\"center\" class=\"r10-i nl2go-default-textstyle\" style=\"color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; line-height: 16px; text-align: center;\"> <div><p style=\"margin: 0;\"><a href=\"{{ mirror }}\" style=\"color: #0092ff; text-decoration: underline;\"> <span style=\"font-family: arial,helvetica,sans-serif; color: #858588; font-size: 12px; text-decoration: underline;\"> View in browser</span></a></p></div> </td> <td class=\"nl2go-responsive-hide\" width=\"30\" style=\"font-size: 0px; line-height: 1px;\">­ </td> </tr></table></td> </tr></table></td> <td class=\"nl2go-responsive-hide\" width=\"10\" style=\"font-size: 0px; line-height: 1px;\">­ </td> </tr></table></th> </tr></table></td> </tr><tr class=\"nl2go-responsive-hide\"><td height=\"5\" style=\"font-size: 5px; line-height: 5px;\">­</td> </tr></table></td> </tr></table></td> </tr></table></td> </tr><tr><td align=\"center\" class=\"r3-c\"> <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" role=\"presentation\" width=\"600\" class=\"r4-o\" style=\"table-layout: fixed; width: 600px;\"><tr><td valign=\"top\" class=\"\"> <table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" role=\"presentation\"><tr><td class=\"r11-c\" align=\"center\"> <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" role=\"presentation\" width=\"100%\" class=\"r9-o\" style=\"table-layout: fixed; width: 100%;\"><!-- --><tr class=\"nl2go-responsive-hide\"><td height=\"20\" style=\"font-size: 20px; line-height: 20px; background-color: #ffffff;\">­</td> </tr><tr><td class=\"r12-i\" style=\"background-color: #ffffff;\"> <table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" role=\"presentation\"><tr><th width=\"100%\" valign=\"top\" class=\"r6-c\"> <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" role=\"presentation\" width=\"100%\" class=\"r1-o\" style=\"table-layout: fixed; width: 100%;\"><!-- --><tr><td class=\"nl2go-responsive-hide\" width=\"15\" style=\"font-size: 0px; line-height: 1px;\">­ </td> <td valign=\"top\" class=\"r7-i\"> <table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" role=\"presentation\"><tr><td class=\"r13-c\" align=\"center\"> <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" role=\"presentation\" width=\"200\" class=\"r14-o\" style=\"table-layout: fixed; width: 200px;\"><tr class=\"nl2go-responsive-hide\"><td height=\"15\" style=\"font-size: 15px; line-height: 15px;\">­</td> </tr><tr><td class=\"r15-i\" style=\"font-size: 0px; line-height: 0px;\"> <img src=\"https://img.mailinblue.com/4499146/images/content_library/original/6239b24cea6d4e11b53cccff.png\" width=\"200\" border=\"0\" class=\"\" style=\"display: block; width: 100%;\"></td> </tr><tr class=\"nl2go-responsive-hide\"><td height=\"15\" style=\"font-size: 15px; line-height: 15px;\">­</td> </tr></table></td> </tr></table></td> <td class=\"nl2go-responsive-hide\" width=\"15\" style=\"font-size: 0px; line-height: 1px;\">­ </td> </tr></table></th> </tr></table></td> </tr><tr class=\"nl2go-responsive-hide\"><td height=\"20\" style=\"font-size: 20px; line-height: 20px; background-color: #ffffff;\">­</td> </tr></table></td> </tr><tr><td class=\"r11-c\" align=\"center\"> <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" role=\"presentation\" width=\"100%\" class=\"r9-o\" style=\"table-layout: fixed; width: 100%;\"><!-- --><tr class=\"nl2go-responsive-hide\"><td height=\"20\" style=\"font-size: 20px; line-height: 20px; background-color: #ffffff;\">­</td> </tr><tr><td class=\"r16-i\" style=\"background-color: #ffffff;\"> <table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" role=\"presentation\"><tr><th width=\"100%\" valign=\"top\" class=\"r6-c\"> <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" role=\"presentation\" width=\"100%\" class=\"r1-o\" style=\"table-layout: fixed; width: 100%;\"><!-- --><tr><td class=\"nl2go-responsive-hide\" width=\"15\" style=\"font-size: 0px; line-height: 1px;\">­ </td> <td valign=\"top\" class=\"r7-i\"> <table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" role=\"presentation\"><tr><td class=\"r17-c\" align=\"left\"> <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" role=\"presentation\" width=\"100%\" class=\"r18-o\" style=\"table-layout: fixed; width: 100%;\"><tr class=\"nl2go-responsive-hide\"><td height=\"15\" style=\"font-size: 15px; line-height: 15px;\">­</td> </tr><tr><td align=\"center\" valign=\"top\" class=\"r19-i nl2go-default-textstyle\" style=\"color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; line-height: 1.5; text-align: center;\"> <div><h1 class=\"default-heading1\" style=\"margin: 0; color: #1F2D3D; font-family: arial,helvetica,sans-serif; font-size: 36px;\">Votre enseigne a été suggérée par un de nos membres!</h1></div> </td> </tr></table></td> </tr><tr><td class=\"r11-c\" align=\"center\"> <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" role=\"presentation\" width=\"570\" class=\"r20-o\" style=\"table-layout: fixed; width: 570px;\"><tr class=\"nl2go-responsive-hide\"><td height=\"15\" style=\"font-size: 15px; line-height: 15px;\">­</td> </tr><tr><td class=\"r21-i\" style=\"font-size: 0px; line-height: 0px;\"> <img src=\"https://img.mailinblue.com/4499146/images/content_library/original/6239b3534ffdf663713b003f.png\" width=\"570\" border=\"0\" class=\"\" style=\"display: block; width: 100%;\"></td> </tr><tr class=\"nl2go-responsive-hide\"><td height=\"15\" style=\"font-size: 15px; line-height: 15px;\">­</td> </tr></table></td> </tr></table></td> <td class=\"nl2go-responsive-hide\" width=\"15\" style=\"font-size: 0px; line-height: 1px;\">­ </td> </tr></table></th> </tr></table></td> </tr><tr class=\"nl2go-responsive-hide\"><td height=\"20\" style=\"font-size: 20px; line-height: 20px; background-color: #ffffff;\">­</td> </tr></table></td> </tr><tr><td class=\"r11-c\" align=\"center\"> <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" role=\"presentation\" width=\"100%\" class=\"r9-o\" style=\"table-layout: fixed; width: 100%;\"><!-- --><tr class=\"nl2go-responsive-hide\"><td height=\"20\" style=\"font-size: 20px; line-height: 20px; background-color: #ffffff;\">­</td> </tr><tr><td class=\"r16-i\" style=\"background-color: #ffffff;\"> <table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" role=\"presentation\"><tr><th width=\"100%\" valign=\"top\" class=\"r6-c\"> <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" role=\"presentation\" width=\"100%\" class=\"r1-o\" style=\"table-layout: fixed; width: 100%;\"><!-- --><tr><td class=\"nl2go-responsive-hide\" width=\"10\" style=\"font-size: 0px; line-height: 1px;\">­ </td> <td valign=\"top\" class=\"r7-i\"> <table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" role=\"presentation\"><tr><td class=\"r17-c\" align=\"left\"> <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" role=\"presentation\" width=\"100%\" class=\"r18-o\" style=\"table-layout: fixed; width: 100%;\"><tr class=\"nl2go-responsive-hide\"><td height=\"15\" style=\"font-size: 15px; line-height: 15px;\">­</td> </tr><tr><td align=\"left\" valign=\"top\" class=\"r22-i nl2go-default-textstyle\" style=\"color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; line-height: 1.5; text-align: left;\"> <div><h2 class=\"default-heading2\" style=\"margin: 0; color: #1F2D3D; font-family: arial,helvetica,sans-serif; font-size: 32px;\">Acceptez-vous de rejoindre notre communauté?</h2></div> </td> </tr></table></td> </tr><tr><td class=\"r17-c\" align=\"left\"> <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" role=\"presentation\" width=\"100%\" class=\"r18-o\" style=\"table-layout: fixed; width: 100%;\"><tr class=\"nl2go-responsive-hide\"><td height=\"15\" style=\"font-size: 15px; line-height: 15px;\">­</td> </tr><tr><td align=\"left\" valign=\"top\" class=\"r23-i nl2go-default-textstyle\" style=\"color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; line-height: 1.5; text-align: left;\"> <div><p style=\"margin: 0;\">Bonjour,</p><p style=\"margin: 0;\"> </p><p style=\"margin: 0;\">Vous recevez ce courrier électronique car l'un de nos membres a suggéré votre enseigne comme étant responsable. <br><br>Super Responsable est une entreprise qui se donne pour objectif d’héberger les enseignes responsables qui le souhaitent afin de les rendre plus visibles auprès de la large communauté de consom'acteurs. Par cette action, nous espérons pouvoir mettre en contact clients et entreprises.</p><p style=\"margin: 0;\"> </p><p style=\"margin: 0;\">Souhaitez-vous intégrer cette communauté et vous faire découvrir par plus de clients?</p></div> </td> </tr><tr class=\"nl2go-responsive-hide\"><td height=\"15\" style=\"font-size: 15px; line-height: 15px;\">­</td> </tr></table></td> </tr><tr><td class=\"r11-c\" align=\"center\"> <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" role=\"presentation\" width=\"290\" class=\"r24-o\" style=\"table-layout: fixed; width: 290px;\"><tr class=\"nl2go-responsive-hide\"><td height=\"15\" style=\"font-size: 15px; line-height: 15px;\">­</td> </tr><tr><td height=\"18\" align=\"center\" valign=\"top\" class=\"r25-i nl2go-default-textstyle\" style=\"color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 16px; line-height: 1.5;\">  <!--[if mso]> <v:roundrect xmlns:v=\"urn:schemas-microsoft-com:vml\" xmlns:w=\"urn:schemas-microsoft-com:office:word\" href=\"\" style=\"v-text-anchor:middle; height: 41px; width: 289px;\" arcsize=\"10%\" fillcolor=\"#0092FF\" strokecolor=\"#0092FF\" strokeweight=\"1px\" data-btn=\"1\"> <w:anchorlock/> <div style=\"display:none;\"> <center class=\"default-button\"><p>Oui, je souhaite en faire partie !</p></center> </div> </v:roundrect> <![endif]-->  <!--[if !mso]><!-- --> <a class=\"r26-r default-button\" target=\"_blank\" data-btn=\"1\" style=\"line-height: 1.15; text-decoration: none; border-style: solid; display: inline-block; -webkit-text-size-adjust: none; mso-hide: all; background-color: #0092FF; border-color: #0092FF; border-radius: 4px; border-width: 0px; color: #ffffff; font-family: arial,helvetica,sans-serif; font-size: 16px; height: 18px; padding-bottom: 12px; padding-left: 5px; padding-right: 5px; padding-top: 12px; width: 280px;\"><p style=\"margin: 0;\">Oui, je souhaite en faire partie !</p></a> <!--<![endif]--> </td> </tr><tr class=\"nl2go-responsive-hide\"><td height=\"15\" style=\"font-size: 15px; line-height: 15px;\">­</td> </tr></table></td> </tr></table></td> <td class=\"nl2go-responsive-hide\" width=\"10\" style=\"font-size: 0px; line-height: 1px;\">­ </td> </tr></table></th> </tr></table></td> </tr><tr class=\"nl2go-responsive-hide\"><td height=\"20\" style=\"font-size: 20px; line-height: 20px; background-color: #ffffff;\">­</td> </tr></table></td> </tr><tr><td class=\"r11-c\" align=\"center\"> <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" role=\"presentation\" width=\"100%\" class=\"r9-o\" style=\"table-layout: fixed; width: 100%;\"><!-- --><tr class=\"nl2go-responsive-hide\"><td height=\"20\" style=\"font-size: 20px; line-height: 20px; background-color: #eff2f7;\">­</td> </tr><tr><td class=\"r27-i\" style=\"background-color: #eff2f7;\"> <table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" role=\"presentation\"><tr><th width=\"100%\" valign=\"top\" class=\"r6-c\"> <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" role=\"presentation\" width=\"100%\" class=\"r1-o\" style=\"table-layout: fixed; width: 100%;\"><!-- --><tr><td class=\"nl2go-responsive-hide\" width=\"15\" style=\"font-size: 0px; line-height: 1px;\">­ </td> <td valign=\"top\" class=\"r7-i\"> <table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" role=\"presentation\"><tr><td class=\"r17-c\" align=\"left\"> <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" role=\"presentation\" width=\"100%\" class=\"r18-o\" style=\"table-layout: fixed; width: 100%;\"><tr class=\"nl2go-responsive-hide\"><td height=\"15\" style=\"font-size: 15px; line-height: 15px;\">­</td> </tr><tr><td align=\"center\" valign=\"top\" class=\"r28-i nl2go-default-textstyle\" style=\"color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 18px; line-height: 1.5; text-align: center;\"> <div><p style=\"margin: 0;\"><strong>TrulyResponsable</strong></p></div> </td> </tr></table></td> </tr><tr><td class=\"r17-c\" align=\"left\"> <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" role=\"presentation\" width=\"100%\" class=\"r18-o\" style=\"table-layout: fixed; width: 100%;\"><tr><td align=\"center\" valign=\"top\" class=\"r29-i nl2go-default-textstyle\" style=\"color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 18px; line-height: 1.5; text-align: center;\"> <div><p style=\"margin: 0; font-size: 14px;\">1645 Route des Lucioles, 06410, Biot</p></div> </td> </tr></table></td> </tr><tr><td class=\"r17-c\" align=\"left\"> <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" role=\"presentation\" width=\"100%\" class=\"r18-o\" style=\"table-layout: fixed; width: 100%;\"><tr class=\"nl2go-responsive-hide\"><td height=\"15\" style=\"font-size: 15px; line-height: 15px;\">­</td> </tr><tr><td align=\"center\" valign=\"top\" class=\"r28-i nl2go-default-textstyle\" style=\"color: #3b3f44; font-family: arial,helvetica,sans-serif; font-size: 18px; line-height: 1.5; text-align: center;\"> <div><p style=\"margin: 0; font-size: 14px;\">Ce message a été envoyé a {{contact.EMAIL}}</p></div> </td> </tr></table></td> </tr><tr><td class=\"r8-c\" align=\"center\"> <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" role=\"presentation\" width=\"100%\" class=\"r9-o\" style=\"table-layout: fixed; width: 100%;\"><tr><td valign=\"top\" class=\"r30-i\"> <table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" role=\"presentation\"><tr><td class=\"r31-c\" align=\"center\"> <table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" role=\"presentation\" width=\"129\" class=\"r32-o\" style=\"table-layout: fixed;\"><tr><td height=\"48\" class=\"\" style=\"font-size: 0px; line-height: 0px;\"> <img src=\"https://img.mailinblue.com/new_images/rnb/en.png\" width=\"129\" border=\"0\" class=\"\" style=\"display: block; width: 100%;\"></td> </tr></table></td> </tr></table></td> </tr><tr class=\"nl2go-responsive-hide\"><td height=\"15\" style=\"font-size: 15px; line-height: 15px;\">­</td> </tr></table></td> </tr></table></td> <td class=\"nl2go-responsive-hide\" width=\"15\" style=\"font-size: 0px; line-height: 1px;\">­ </td> </tr></table></th> </tr></table></td> </tr><tr class=\"nl2go-responsive-hide\"><td height=\"20\" style=\"font-size: 20px; line-height: 20px; background-color: #eff2f7;\">­</td> </tr></table></td> </tr></table></td> </tr></table></td> </tr></table></body></html>\n";
         sendSmtpEmail.sender = {"name": "Barbara Nouhaila", "email": "noubarbara@gmail.com"};
         sendSmtpEmail.to = [{"email": "bgtheodore18@gmail.com", "name": "Barbara"}];
         // sendSmtpEmail.cc = [{"email":"example2@example2.com","name":"Janice Doe"}];
         // sendSmtpEmail.bcc = [{"email":"John Doe","name":"example@example.com"}];
         // sendSmtpEmail.replyTo = {"email":"replyto@domain.com","name":"John Doe"};
         // sendSmtpEmail.headers = {"Some-Custom-Name":"unique-id-1234"};
         sendSmtpEmail.params = {"parameter": req.body.name, "subject": "New Subject"};

         apiInstance.sendTransacEmail(sendSmtpEmail).then(function (data) {
             console.log('API called successfully. Returned data: ' + JSON.stringify(data));
         }, function (error) {
             console.error(error);
         });
     }





// Save Enseigne in the database
Enseigne.countDocuments({name:req.body.name.toLowerCase()}, function (err, count){
            if (count>0){
                res.send('Data already save');
            }else{
                enseigne.save(SendTestEmail())
                    .then(data => {
                        res.send(data);
                    }).catch(err => {
                    res.status(500).send({
                        message: err.message || "Some error occurred while creating the Enseigne."
                    });
                });
            }
        })
};

// Retrieve and return all enseignes from the database.
exports.findAll = (req, res) => {
    Enseigne.find()
        .then(enseignes => {
            res.send(enseignes);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving enseignes."
        });
    });

};

// Find a single enseigne with a enseigneId
exports.findOne = (req, res) => {
    Enseigne.findById(req.params.enseigneId)
        .then(enseigne => {
            if(!enseigne) {
                return res.status(404).send({
                    message: "Enseigne not found with id " + req.params.enseigneId
                });
            }
            res.send(enseigne);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Enseigne not found with id " + req.params.enseigneId
            });
        }
        return res.status(500).send({
            message: "Error retrieving enseigne with id " + req.params.enseigneId
        });
    });
};

// Update a enseigne identified by the enseigneId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.name) {
        return res.status(400).send({
            message: "You have to name it"
        });
    }

    // Find enseigne and update it with the request body
    Enseigne.findByIdAndUpdate(req.params.enseigneId, {
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        address:req.body.address,
        imageURL:req.body.imageURL
    }, {new: true})
        .then(enseigne => {
            if(!enseigne) {
                return res.status(404).send({
                    message: "Enseigne not found with id " + req.params.enseigneId
                });
            }
            res.send(enseigne);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Enseigne not found with id " + req.params.enseigneId
            });
        }
        return res.status(500).send({
            message: "Error updating enseigne with id " + req.params.enseigneId
        });
    });

};

// Delete a enseigne with the specified enseigneId in the request
exports.delete = (req, res) => {
    Enseigne.findByIdAndRemove(req.params.enseigneId)
        .then(enseigne => {
            if(!enseigne) {
                return res.status(404).send({
                    message: "Enseigne not found with id " + req.params.enseigneId
                });
            }
            res.send({message: "Enseigne deleted successfully!"});
        }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Enseigne not found with id " + req.params.enseigneId
            });
        }
        return res.status(500).send({
            message: "Could not delete enseigne with id " + req.params.enseigneId
        });
    });

};
