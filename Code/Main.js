function afterFormSubmit(e) {
    const info = e.namedValues;
    const pdfFile = createPDF(info);
    const entryRow = e.range.getRow();
    const ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("GTCSEMP");
    ws.getRange(entryRow,112).setValue(pdfFile.getUrl());
    ws.getRange(entryRow,113).setValue(pdfFile.getName());
    var firstname = e.namedValues['First Name'][0];
    var middlename = e.namedValues['Middle Name'][0];
    var lastname = e.namedValues['Last Name'][0];
    sendEmail(e.namedValues['Gmail'][0],pdfFile,firstname,middlename,lastname);
     
  }
  function sendEmail(email,pdfFile,firstname,middlename,lastname){
    var subject = 'GTCS-Online Regsration for EMP';
    var body = '<h4>Hi,'+firstname+' '+middlename+' '+lastname+'<br/>Your Registration is activated successfully in Gateway The Complete School<br/>Check this PDF file below<br/>If Any Correction Contact <br/>GATEWAY THE COMPLETE SCHOOL</h4><br/><style>table {border-collapse: collapse;width: 100%;}th, td {padding: 8px;text-align:center;border-bottom: 1px solid #ddd;}tr:hover {background-color: coral;}</style><table><tr style="background-color: #ff0000;"><th style="color:#ffff;">Make correction your form</th><th style="color:#ffff; font-size:15px;">Facing Technical Issuse</th></tr><tr><td>Admin Office</td><td>Mr. Manikandan P</td></tr><tr><td>Gateway The Complete School</td><td>Gateway The Complete School</td></tr><tr><td><img src="https://drive.google.com/u/0/uc?id=1XjXhyxg5SrDHytOfPvuNkggvEbs0hUoc"alt="GTCS" width="400" height="100"></td><td><img src="https://drive.google.com/u/0/uc?id=1isSIptdTt75wS-pin2yCzY40FXrFwRlc"alt="Manikandan" width="400" height="100"></td></tr></table>';
    
    GmailApp.sendEmail(email,subject,body,{
      htmlBody:body,
      attachments:[pdfFile],
      name:'GTCS-Admin'
    });
  }
  function createPDF(info){
    const pdfFolder = DriveApp.getFolderById("14Y6w32Ycb1IpDjYTsOO5VcBIksIPsrV9");
    const tempFolder = DriveApp.getFolderById("1dQnjw2TtctTqXezxsr6lPM-NkfJZpV1p");
    const templateDoc = DriveApp.getFileById("1u1qwGjm9DcoTi_Y0XS1R8-sY82G9Z6kqmwMR9a26-28");
  
    const newTempFile = templateDoc.makeCopy(tempFolder);
    const openDoc = DocumentApp.openById(newTempFile.getId());
    const body = openDoc.getBody();
    
    body.replaceText('{fname}', info['First Name'][0]);
    body.replaceText('{mname}', info['Middle Name'][0]); 
    body.replaceText('{lname}', info['Last Name'][0]);   
    body.replaceText('{fsname}', info['Father Name / Spouse Name'][0]);
    body.replaceText('{gender}', info['Gender'][0]);
    body.replaceText('{dob}', info['DOB (Date Of Birth)'][0]);
    body.replaceText('{mobnum}', info['Mobile No'][0]);
    body.replaceText('{email}', info['Gmail'][0]);
    body.replaceText('{nationality}', info['Nationality'][0]);
    body.replaceText('{bloodgroup}', info['Blood Group'][0]);
    body.replaceText('{adharno}', info['Aadhaar No'][0]);
    body.replaceText('{passportno}', info['Passport No'][0]);
    body.replaceText('{maritalstatus}', info['Marital Status'][0]);
    body.replaceText('{panno}', info['Pan No'][0]);
    body.replaceText('{uanno}', info['UAN No'][0]);
    body.replaceText('{english}', info['Languages Known as [English]'][0]);
    body.replaceText('{tamil}', info['Languages Known as [Tamil]'][0]);
    body.replaceText('{hindi}', info['Languages Known as [Hindi]'][0]);
    body.replaceText('{otherlang}', info['Languages Known as (Other Languages)'][0]);
    body.replaceText('{caddress}', info['Current Address'][0]);
    body.replaceText('{paddress}', info['Permanent Address'][0]);
    body.replaceText('{chooseaddress}', info['Communication Address'][0]);
    body.replaceText('{acno}', info['Account Number'][0]);
    body.replaceText('{ifscno}', info['IFSC No :'][0]);
    body.replaceText('{height}', info['Height'][0]);
    body.replaceText('{weight}', info['Weight'][0]);
    body.replaceText('{hobbies}', info['Hobbies / Interest'][0]);
    body.replaceText('{course1}', info['Degree / Course Name'][0]);
    body.replaceText('{inst1}', info['Institute Name / University Name'][0]);
    body.replaceText('{cd1}', info['Course Duration'][0]);
    body.replaceText('{ctype1}', info['Course Type'][0]);
    body.replaceText('{yop1}', info['Year Of Passing'][0]);
    body.replaceText('{p1}', info['Percentage'][0]);
    body.replaceText('{course2}', info['Degree / Course Name -2'][0]);
    body.replaceText('{inst2}', info['Institute Name / University Name -2'][0]);
    body.replaceText('{cd2}', info['Course Duration -2'][0]);
    body.replaceText('{ctype2}', info['Course Type -2'][0]);
    body.replaceText('{yop2}', info['Year Of Passing -2'][0]);
    body.replaceText('{p2}', info['Percentage -2'][0]);
    body.replaceText('{course3}', info['Degree / Course Name -3'][0]);
    body.replaceText('{inst3}', info['Institute Name / University Name -3'][0]);
    body.replaceText('{cd3}', info['Course Duration -3'][0]);
    body.replaceText('{ctype3}', info['Course Type -3'][0]);
    body.replaceText('{yop3}', info['Year Of Passing -3'][0]);
    body.replaceText('{p3}', info['Percentage -3'][0]);
    body.replaceText('{course4}', info['Degree / Course Name -4'][0]);
    body.replaceText('{inst4}', info['Institute Name / University Name -4'][0]);
    body.replaceText('{cd4}', info['Course Duration -4'][0]);
    body.replaceText('{ctype4}', info['Course Type -4'][0]);
    body.replaceText('{yop4}', info['Year Of Passing -4'][0]);
    body.replaceText('{p4}', info['Percentage -4'][0]);
    body.replaceText('{course5}', info['Degree / Course Name -5'][0]);
    body.replaceText('{inst5}', info['Institute Name / University Name -5'][0]);
    body.replaceText('{cd5}', info['Course Duration -5'][0]);
    body.replaceText('{ctype5}', info['Course Type -5'][0]);
    body.replaceText('{yop5}', info['Year Of Passing -5'][0]);
    body.replaceText('{p5}', info['Percentage -5'][0]);
    //body.replaceText('{00}', items[33].getResponse());
    body.replaceText('{addcourse}', info['Course Name'][0]);
    body.replaceText('{emphistory}', info['Are You Experienced'][0]);
    body.replaceText('{empname1}', info['Employer Name'][0]);
    body.replaceText('{empdes1}', info['Your Designation'][0]);
    body.replaceText('{empfd1}', info['From Date'][0]);
    body.replaceText('{emptd1}', info['To Date'][0]);
    body.replaceText('{emprole1}', info['Your Work Nature /Role'][0]);
  
    body.replaceText('{empname2}', info['Employer Name -2'][0]); 
    body.replaceText('{empdes2}', info['Your Designation -2'][0]);
    body.replaceText('{empfd2}', info['From Date -2'][0]);
    body.replaceText('{emptd2}', info['To Date -2'][0]);
    body.replaceText('{emprole2}', info['Your Work Nature /Role -2'][0]);
  
    body.replaceText('{empname3}', info['Employer Name -3'][0]);
    body.replaceText('{empdes3}', info['Your Designation -3'][0]);
    body.replaceText('{empfd3}', info['From Date -3'][0]);
    body.replaceText('{emptd3}', info['To Date -3'][0]);
    body.replaceText('{emprole3}', info['Your Work Nature /Role -3'][0]);
  
    body.replaceText('{empname4}', info['Employer Name -4'][0]);
    body.replaceText('{empdes4}', info['Your Designation -4'][0]);
    body.replaceText('{empfd4}', info['From Date -4'][0]);
    body.replaceText('{emptd4}', info['To Date -4'][0]);
    body.replaceText('{emprole4}', info['Your Work Nature /Role -4'][0]);
  
    body.replaceText('{empname5}', info['Employer Name -5'][0]);
    body.replaceText('{empdes5}', info['Your Designation -5'][0]);
    body.replaceText('{empfd5}', info['From Date -5'][0]);
    body.replaceText('{emptd5}', info['To Date -5'][0]);
    body.replaceText('{emprole5}', info['Your Work Nature /Role -5'][0]);
  
    body.replaceText('{ecname}', info['Full Name'][0]);
    body.replaceText('{ecaddress}', info['Address'][0]);
    body.replaceText('{ecnum}', info['Contact Number'][0]);
    body.replaceText('{ecrelationship}', info['Relationship'][0]);
    body.replaceText('{nomineename}', info['Nominee Name'][0]);
    body.replaceText('{nomineerelation}', info['Relationship With Member'][0]);
    body.replaceText('{whatrelation}', info['Relationship'][0]);
    body.replaceText('{relationname}', info['Name'][0]);
    body.replaceText('{worklocation}', info['Work Location'][0]);
    body.replaceText('{relationdesign}', info['Designation'][0]);
    
    openDoc.saveAndClose();
  
    const blobPDF = newTempFile.getAs(MimeType.PDF);
    const pdfFile = pdfFolder.createFile(blobPDF).setName(info['First Name'][0]+"-"+['DOB'][0]);
    const nameFiledoc = pdfFolder.createFile(blobPDF).setName(info['First Name'][0]+"-"+['DOB'][0]);
    DriveApp.getFileById(newTempFile.getId()).setName(nameFiledoc);
    return pdfFile;
    
  }
  