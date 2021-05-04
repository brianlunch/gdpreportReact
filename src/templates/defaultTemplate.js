var defaultTemplate = 
`
<br/>
<h1>Consent Issues Report</h1> 
<br/>
<p>This report highlights the issues found in the consent dialogue box on the website <a target="_blank" href={{url}}>{{url}}</a> as of {{time}}.</p>
<p>The issues are highlighted in the image above. Each highlighted area has been annotated and automatically associated with the laws it may have violated.</p>
<br/>

{{#boxes}}
<div style =\"border:1px solid black; padding: 2%;\">  
<h2>Highligted Issue #{{number}}</h2> 
<p><b>Domain Used: </b> {{domain}}</p>

{{#issues}} 
<br/>
<h4>Issue Name: {{name}}</h4> 
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
</div>
<br/>
{{/boxes}} 

`;

export default defaultTemplate;