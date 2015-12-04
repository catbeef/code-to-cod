walk(document.body);

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


