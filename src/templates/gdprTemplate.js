var gdprTemplate = 
`
<h1>GDPR Template</h1> 
<div className =\"boxBorder\"> 
{{#boxes}}
<h1>{{number}} - {{domain}}- GDPR</h1> 
<br/> 
{{#issues}} 
<h3>Issue Name: {{name}}</h3> 
<p>User Comments:{{cmnt}}</p> 

<ul> 
{{#laws}} 
<li> 
<h5>Law Name: {{lawName}}</h5> 
<p>Law Description: {{lawDescription}}</p> 
</li> 
{{/laws}} 
</ul> 
{{/issues}} 
{{/boxes}} 
</div>
`;

export default gdprTemplate;