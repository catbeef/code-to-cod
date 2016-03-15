walk(document.body);
unfuddler();

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;
	v = v.replace(/\b(cod)e\b/gi, '$1');
	v = v.replace(/\b(cod)e(base)\b/gi, '$1$2');
	v = v.replace(/\b(co(d))(ing)\b/gi, '$1d$2$3');
	v = v.replace(/\b(co(d))(er)\b/gi, '$1d$2$3');
	v = v.replace(/\b(open) (s)ource\b/gi, '$1 $2ores');
	v = v.replace(/\bfoo\b/gi, 'poop');
	v = v.replace(/\bbar\b/gi, 'ass');
	v = v.replace(/\bbaz\b/gi, 'balls');
	v = v.replace(/\bqux\b/gi, 'derp');
	textNode.nodeValue = v;
}


function unfuddler() {
	'use strict';

	if (!location.hostname.endsWith('unfuddle.com')) return;

	const mappings = [
		{
			selector: 'span.status-color-gray',
			expect: 'New',
			replace: 'Uncodded'
		},
		{
			selector: 'span.status-color-purple',
			expect: 'In Progress',
			replace: 'Coddding'
		},
		{
			selector: 'span.status-color-teal',
			expect: 'Complete',
			replace: 'Codded'
		}
	];

	mappings.forEach(({ selector, expect, replace }) =>
		Array
			.from(document.querySelectorAll(selector))
			.filter(node => node.textContent.includes(expect))
			.forEach(node => node.innerHTML = replace)
	);
}
