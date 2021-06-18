function generatePDF()
{
	try{
		var element=document.getElementById('vaccineInfo');
		html2pdf()
		.from(element)
		.save();
	}
	catch(err)
	{
		console.log(err);
	}
}
	