(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2985],{30308:function(e){function n(e){return function(...e){return e.map((e=>function(e){return e?"string"===typeof e?e:e.source:null}(e))).join("")}("(?=",e,")")}e.exports=function(e){const a={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:["and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]},i={className:"meta",begin:/^(>>>|\.\.\.) /},s={className:"subst",begin:/\{/,end:/\}/,keywords:a,illegal:/#/},t={begin:/\{\{/,relevance:0},r={className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,i],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,i],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,i,t,s]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,i,t,s]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[e.BACKSLASH_ESCAPE,t,s]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,t,s]},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},l="[0-9](_?[0-9])*",b=`(\\b(${l}))?\\.(${l})|\\b(${l})\\.`,o={className:"number",relevance:0,variants:[{begin:`(\\b(${l})|(${b}))[eE][+-]?(${l})[jJ]?\\b`},{begin:`(${b})[jJ]?`},{begin:"\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?\\b"},{begin:"\\b0[bB](_?[01])+[lL]?\\b"},{begin:"\\b0[oO](_?[0-7])+[lL]?\\b"},{begin:"\\b0[xX](_?[0-9a-fA-F])+[lL]?\\b"},{begin:`\\b(${l})[jJ]\\b`}]},c={className:"comment",begin:n(/# type:/),end:/$/,keywords:a,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},d={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:["self",i,o,r,e.HASH_COMMENT_MODE]}]};return s.contains=[r,o,i],{name:"Python",aliases:["py","gyp","ipython"],keywords:a,illegal:/(<\/|->|\?)|=>/,contains:[i,o,{begin:/\bself\b/},{beginKeywords:"if",relevance:0},r,c,e.HASH_COMMENT_MODE,{variants:[{className:"function",beginKeywords:"def"},{className:"class",beginKeywords:"class"}],end:/:/,illegal:/[${=;\n,]/,contains:[e.UNDERSCORE_TITLE_MODE,d,{begin:/->/,endsWithParent:!0,keywords:a}]},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[o,d,r]}]}}}}]);