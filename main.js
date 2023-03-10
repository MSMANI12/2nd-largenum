var a=[22,12,24,55,44];
function assendingorder(a){
	for(i=0;i<a.length;i++){
		for(j=i+1;j<a.length;j++){
		if(a[i]<a[j]){
			c=a[i];
			a[i]=a[j];
			a[j]=c;
		}
		}
	}
	return a;
}
	document.write(assendingorder(a));
	document.write("<br>");
	document.write(a[1]);