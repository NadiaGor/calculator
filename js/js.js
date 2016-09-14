'use strict';

/* Calculator triangle area 
(Geron's formula: S=square root of p*(p-a)*(p-b)*(p-c)), 
where p=(a+b+c)/2) 
*/

function areaTriangle (obj) {
	var a = 1*obj.sd1.value;
	var b = 1*obj.sd2.value;
	var c = 1*obj.sd3.value;
	var p = (a+b+c)/2;
	var s = Math.sqrt(p*(p-a)*(p-b)*(p-c));
	s=s.toFixed(2);
	obj.result.value = s;
}

/* Calculator trapezoid area (S=(1/2(a+b)*h) */
function areaTrapezoid (obj) {
	var a = obj.b1.value;
	var b = obj.b2.value;
	var h = obj.alt.value;
	var s = 1/2*(a+b)*h;
	s = s.toFixed(2);
	obj.result.value = s;
}

/* Calculator circle area (S=(Pr2) */
function areaCircle (obj) {
	var p = 1*3.14
	var r = 1*obj.r.value;
	var s = p*(r*r);
	s = s.toFixed(2);
	obj.result.value = s;
}

/* Calculator sphere surface (S=(4Pr2) */
function areaSphere (obj) {
	var p = 1*3.14;
	var r = 1*obj.r.value;
	var s = 4*p*(r*r);
	s = s.toFixed(2);
	obj.result.value = s;
}

/* Cylinder V = Pr2h */
function volumeCylinder (obj) {
	var p = 1*3.14;
	var r = 1*obj.r.value;
	var h = 1*obj.h.value;
	var v = p*(r*r)*h;
	v = v.toFixed(2);
	obj.result.value = v;
}

/* Pyramid V = bh, where b - area of the base */
function volumePyramid (obj) {
	var a = 1*obj.a.value;
	var b = 1*obj.b.value;
	var h = 1*obj.h.value;
	var v = a*b*h;
	v = v.toFixed(2);
	obj.result.value = v;
}

/* Cone V= 1/3*Pr2h */
function volumeCone (obj) {
	var r = 1*obj.r.value;
	var h = 1*obj.h.value;
	var p = 1*3.14;
	var v = 1/3*(p*(r*r)*h);
	v = v.toFixed(2);
	obj.result.value = v;
}

/* Sphere V= 4/3*Pr3 */
function volumeSphere (obj) {
	var p = 1*3.14;
	var r = 1*obj.r.value;
	var v = 4/3*(p*(r*r*r));
	v = v.toFixed(2);
	obj.result.value = v;
}






