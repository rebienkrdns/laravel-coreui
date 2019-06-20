/*!
 *  Lang.js for Laravel localization in JavaScript.
 *
 *  @version 1.1.10
 *  @license MIT https://github.com/rmariuzzo/Lang.js/blob/master/LICENSE
 *  @site    https://github.com/rmariuzzo/Lang.js
 *  @author  Rubens Mariuzzo <rubens@mariuzzo.com>
 */
(function(root,factory){"use strict";if(typeof define==="function"&&define.amd){define([],factory)}else if(typeof exports==="object"){module.exports=factory()}else{root.Lang=factory()}})(this,function(){"use strict";function inferLocale(){if(typeof document!=="undefined"&&document.documentElement){return document.documentElement.lang}}function convertNumber(str){if(str==="-Inf"){return-Infinity}else if(str==="+Inf"||str==="Inf"||str==="*"){return Infinity}return parseInt(str,10)}var intervalRegexp=/^({\s*(\-?\d+(\.\d+)?[\s*,\s*\-?\d+(\.\d+)?]*)\s*})|([\[\]])\s*(-Inf|\*|\-?\d+(\.\d+)?)\s*,\s*(\+?Inf|\*|\-?\d+(\.\d+)?)\s*([\[\]])$/;var anyIntervalRegexp=/({\s*(\-?\d+(\.\d+)?[\s*,\s*\-?\d+(\.\d+)?]*)\s*})|([\[\]])\s*(-Inf|\*|\-?\d+(\.\d+)?)\s*,\s*(\+?Inf|\*|\-?\d+(\.\d+)?)\s*([\[\]])/;var defaults={locale:"en"};var Lang=function(options){options=options||{};this.locale=options.locale||inferLocale()||defaults.locale;this.fallback=options.fallback;this.messages=options.messages};Lang.prototype.setMessages=function(messages){this.messages=messages};Lang.prototype.getLocale=function(){return this.locale||this.fallback};Lang.prototype.setLocale=function(locale){this.locale=locale};Lang.prototype.getFallback=function(){return this.fallback};Lang.prototype.setFallback=function(fallback){this.fallback=fallback};Lang.prototype.has=function(key,locale){if(typeof key!=="string"||!this.messages){return false}return this._getMessage(key,locale)!==null};Lang.prototype.get=function(key,replacements,locale){if(!this.has(key,locale)){return key}var message=this._getMessage(key,locale);if(message===null){return key}if(replacements){message=this._applyReplacements(message,replacements)}return message};Lang.prototype.trans=function(key,replacements){return this.get(key,replacements)};Lang.prototype.choice=function(key,number,replacements,locale){replacements=typeof replacements!=="undefined"?replacements:{};replacements.count=number;var message=this.get(key,replacements,locale);if(message===null||message===undefined){return message}var messageParts=message.split("|");var explicitRules=[];for(var i=0;i<messageParts.length;i++){messageParts[i]=messageParts[i].trim();if(anyIntervalRegexp.test(messageParts[i])){var messageSpaceSplit=messageParts[i].split(/\s/);explicitRules.push(messageSpaceSplit.shift());messageParts[i]=messageSpaceSplit.join(" ")}}if(messageParts.length===1){return message}for(var j=0;j<explicitRules.length;j++){if(this._testInterval(number,explicitRules[j])){return messageParts[j]}}var pluralForm=this._getPluralForm(number);return messageParts[pluralForm]};Lang.prototype.transChoice=function(key,count,replacements){return this.choice(key,count,replacements)};Lang.prototype._parseKey=function(key,locale){if(typeof key!=="string"||typeof locale!=="string"){return null}var segments=key.split(".");var source=segments[0].replace(/\//g,".");return{source:locale+"."+source,sourceFallback:this.getFallback()+"."+source,entries:segments.slice(1)}};Lang.prototype._getMessage=function(key,locale){locale=locale||this.getLocale();key=this._parseKey(key,locale);if(this.messages[key.source]===undefined&&this.messages[key.sourceFallback]===undefined){return null}var message=this.messages[key.source];var entries=key.entries.slice();var subKey="";while(entries.length&&message!==undefined){var subKey=!subKey?entries.shift():subKey.concat(".",entries.shift());if(message[subKey]!==undefined){message=message[subKey];subKey=""}}if(typeof message!=="string"&&this.messages[key.sourceFallback]){message=this.messages[key.sourceFallback];entries=key.entries.slice();subKey="";while(entries.length&&message!==undefined){var subKey=!subKey?entries.shift():subKey.concat(".",entries.shift());if(message[subKey]){message=message[subKey];subKey=""}}}if(typeof message!=="string"){return null}return message};Lang.prototype._findMessageInTree=function(pathSegments,tree){while(pathSegments.length&&tree!==undefined){var dottedKey=pathSegments.join(".");if(tree[dottedKey]){tree=tree[dottedKey];break}tree=tree[pathSegments.shift()]}return tree};Lang.prototype._applyReplacements=function(message,replacements){for(var replace in replacements){message=message.replace(new RegExp(":"+replace,"gi"),function(match){var value=replacements[replace];var allCaps=match===match.toUpperCase();if(allCaps){return value.toUpperCase()}var firstCap=match===match.replace(/\w/i,function(letter){return letter.toUpperCase()});if(firstCap){return value.charAt(0).toUpperCase()+value.slice(1)}return value})}return message};Lang.prototype._testInterval=function(count,interval){if(typeof interval!=="string"){throw"Invalid interval: should be a string."}interval=interval.trim();var matches=interval.match(intervalRegexp);if(!matches){throw"Invalid interval: "+interval}if(matches[2]){var items=matches[2].split(",");for(var i=0;i<items.length;i++){if(parseInt(items[i],10)===count){return true}}}else{matches=matches.filter(function(match){return!!match});var leftDelimiter=matches[1];var leftNumber=convertNumber(matches[2]);if(leftNumber===Infinity){leftNumber=-Infinity}var rightNumber=convertNumber(matches[3]);var rightDelimiter=matches[4];return(leftDelimiter==="["?count>=leftNumber:count>leftNumber)&&(rightDelimiter==="]"?count<=rightNumber:count<rightNumber)}return false};Lang.prototype._getPluralForm=function(count){switch(this.locale){case"az":case"bo":case"dz":case"id":case"ja":case"jv":case"ka":case"km":case"kn":case"ko":case"ms":case"th":case"tr":case"vi":case"zh":return 0;case"af":case"bn":case"bg":case"ca":case"da":case"de":case"el":case"en":case"eo":case"es":case"et":case"eu":case"fa":case"fi":case"fo":case"fur":case"fy":case"gl":case"gu":case"ha":case"he":case"hu":case"is":case"it":case"ku":case"lb":case"ml":case"mn":case"mr":case"nah":case"nb":case"ne":case"nl":case"nn":case"no":case"om":case"or":case"pa":case"pap":case"ps":case"pt":case"so":case"sq":case"sv":case"sw":case"ta":case"te":case"tk":case"ur":case"zu":return count==1?0:1;case"am":case"bh":case"fil":case"fr":case"gun":case"hi":case"hy":case"ln":case"mg":case"nso":case"xbr":case"ti":case"wa":return count===0||count===1?0:1;case"be":case"bs":case"hr":case"ru":case"sr":case"uk":return count%10==1&&count%100!=11?0:count%10>=2&&count%10<=4&&(count%100<10||count%100>=20)?1:2;case"cs":case"sk":return count==1?0:count>=2&&count<=4?1:2;case"ga":return count==1?0:count==2?1:2;case"lt":return count%10==1&&count%100!=11?0:count%10>=2&&(count%100<10||count%100>=20)?1:2;case"sl":return count%100==1?0:count%100==2?1:count%100==3||count%100==4?2:3;case"mk":return count%10==1?0:1;case"mt":return count==1?0:count===0||count%100>1&&count%100<11?1:count%100>10&&count%100<20?2:3;case"lv":return count===0?0:count%10==1&&count%100!=11?1:2;case"pl":return count==1?0:count%10>=2&&count%10<=4&&(count%100<12||count%100>14)?1:2;case"cy":return count==1?0:count==2?1:count==8||count==11?2:3;case"ro":return count==1?0:count===0||count%100>0&&count%100<20?1:2;case"ar":return count===0?0:count==1?1:count==2?2:count%100>=3&&count%100<=10?3:count%100>=11&&count%100<=99?4:5;default:return 0}};return Lang});

(function () {
    Lang = new Lang();
    Lang.setMessages({"en.app":{"data_table":{"aria":{"sortAscending":": activate to sort column ascending","sortDescending":": activate to sort column descending"},"decimal":"","emptyTable":"No data available in table","info":"Showing _START_ to _END_ of _TOTAL_ entries","infoEmpty":"Showing 0 to 0 of 0 entries","infoFiltered":"(filtered from _MAX_ total entries)","infoPostFix":"","lengthMenu":"Show _MENU_ entries","loadingRecords":"Loading...","paginate":{"first":"First","last":"Last","next":"Next","previous":"Previous"},"processing":"Processing...","search":"Search:","thousands":",","zeroRecords":"No matching records found"}},"en.auth":{"failed":"These credentials do not match our records.","throttle":"Too many login attempts. Please try again in :seconds seconds."},"en.pagination":{"next":"Next &raquo;","previous":"&laquo; Previous"},"en.passwords":{"password":"Passwords must be at least eight characters and match the confirmation.","reset":"Your password has been reset!","sent":"We have e-mailed your password reset link!","token":"This password reset token is invalid.","user":"We can't find a user with that e-mail address."},"en.validation":{"accepted":"The :attribute must be accepted.","active_url":"The :attribute is not a valid URL.","after":"The :attribute must be a date after :date.","after_or_equal":"The :attribute must be a date after or equal to :date.","alpha":"The :attribute may only contain letters.","alpha_dash":"The :attribute may only contain letters, numbers, dashes and underscores.","alpha_num":"The :attribute may only contain letters and numbers.","array":"The :attribute must be an array.","attributes":[],"before":"The :attribute must be a date before :date.","before_or_equal":"The :attribute must be a date before or equal to :date.","between":{"array":"The :attribute must have between :min and :max items.","file":"The :attribute must be between :min and :max kilobytes.","numeric":"The :attribute must be between :min and :max.","string":"The :attribute must be between :min and :max characters."},"boolean":"The :attribute field must be true or false.","confirmed":"The :attribute confirmation does not match.","custom":{"attribute-name":{"rule-name":"custom-message"}},"date":"The :attribute is not a valid date.","date_equals":"The :attribute must be a date equal to :date.","date_format":"The :attribute does not match the format :format.","different":"The :attribute and :other must be different.","digits":"The :attribute must be :digits digits.","digits_between":"The :attribute must be between :min and :max digits.","dimensions":"The :attribute has invalid image dimensions.","distinct":"The :attribute field has a duplicate value.","email":"The :attribute must be a valid email address.","ends_with":"The :attribute must end with one of the following: :values","exists":"The selected :attribute is invalid.","file":"The :attribute must be a file.","filled":"The :attribute field must have a value.","gt":{"array":"The :attribute must have more than :value items.","file":"The :attribute must be greater than :value kilobytes.","numeric":"The :attribute must be greater than :value.","string":"The :attribute must be greater than :value characters."},"gte":{"array":"The :attribute must have :value items or more.","file":"The :attribute must be greater than or equal :value kilobytes.","numeric":"The :attribute must be greater than or equal :value.","string":"The :attribute must be greater than or equal :value characters."},"image":"The :attribute must be an image.","in":"The selected :attribute is invalid.","in_array":"The :attribute field does not exist in :other.","integer":"The :attribute must be an integer.","ip":"The :attribute must be a valid IP address.","ipv4":"The :attribute must be a valid IPv4 address.","ipv6":"The :attribute must be a valid IPv6 address.","json":"The :attribute must be a valid JSON string.","lt":{"array":"The :attribute must have less than :value items.","file":"The :attribute must be less than :value kilobytes.","numeric":"The :attribute must be less than :value.","string":"The :attribute must be less than :value characters."},"lte":{"array":"The :attribute must not have more than :value items.","file":"The :attribute must be less than or equal :value kilobytes.","numeric":"The :attribute must be less than or equal :value.","string":"The :attribute must be less than or equal :value characters."},"max":{"array":"The :attribute may not have more than :max items.","file":"The :attribute may not be greater than :max kilobytes.","numeric":"The :attribute may not be greater than :max.","string":"The :attribute may not be greater than :max characters."},"mimes":"The :attribute must be a file of type: :values.","mimetypes":"The :attribute must be a file of type: :values.","min":{"array":"The :attribute must have at least :min items.","file":"The :attribute must be at least :min kilobytes.","numeric":"The :attribute must be at least :min.","string":"The :attribute must be at least :min characters."},"not_in":"The selected :attribute is invalid.","not_regex":"The :attribute format is invalid.","numeric":"The :attribute must be a number.","present":"The :attribute field must be present.","regex":"The :attribute format is invalid.","required":"The :attribute field is required.","required_if":"The :attribute field is required when :other is :value.","required_unless":"The :attribute field is required unless :other is in :values.","required_with":"The :attribute field is required when :values is present.","required_with_all":"The :attribute field is required when :values are present.","required_without":"The :attribute field is required when :values is not present.","required_without_all":"The :attribute field is required when none of :values are present.","same":"The :attribute and :other must match.","size":{"array":"The :attribute must contain :size items.","file":"The :attribute must be :size kilobytes.","numeric":"The :attribute must be :size.","string":"The :attribute must be :size characters."},"starts_with":"The :attribute must start with one of the following: :values","string":"The :attribute must be a string.","timezone":"The :attribute must be a valid zone.","unique":"The :attribute has already been taken.","uploaded":"The :attribute failed to upload.","url":"The :attribute format is invalid.","uuid":"The :attribute must be a valid UUID."},"es.auth":{"failed":"Estas credenciales no coinciden con nuestros registros.","throttle":"Demasiados intentos de acceso. Por favor intente nuevamente en :seconds segundos."},"es.pagination":{"next":"Siguiente &raquo;","previous":"&laquo; Anterior"},"es.passwords":{"password":"Las contrase\u00f1as deben coincidir y contener al menos 6 caracteres","reset":"\u00a1Tu contrase\u00f1a ha sido restablecida!","sent":"\u00a1Te hemos enviado por correo el enlace para restablecer tu contrase\u00f1a!","token":"El token de recuperaci\u00f3n de contrase\u00f1a es inv\u00e1lido.","user":"No podemos encontrar ning\u00fan usuario con ese correo electr\u00f3nico."},"es.validation":{"accepted":":attribute debe ser aceptado.","active_url":":attribute no es una URL v\u00e1lida.","after":":attribute debe ser una fecha posterior a :date.","after_or_equal":":attribute debe ser una fecha posterior o igual a :date.","alpha":":attribute s\u00f3lo debe contener letras.","alpha_dash":":attribute s\u00f3lo debe contener letras, n\u00fameros y guiones.","alpha_num":":attribute s\u00f3lo debe contener letras y n\u00fameros.","array":":attribute debe ser un conjunto.","attributes":{"address":"direcci\u00f3n","age":"edad","body":"contenido","city":"ciudad","content":"contenido","country":"pa\u00eds","date":"fecha","day":"d\u00eda","description":"descripci\u00f3n","email":"correo electr\u00f3nico","excerpt":"extracto","first_name":"nombre","gender":"g\u00e9nero","hour":"hora","last_name":"apellido","message":"mensaje","minute":"minuto","mobile":"m\u00f3vil","month":"mes","name":"nombre","password":"contrase\u00f1a","password_confirmation":"confirmaci\u00f3n de la contrase\u00f1a","phone":"tel\u00e9fono","second":"segundo","sex":"sexo","subject":"asunto","time":"hora","title":"t\u00edtulo","username":"usuario","year":"a\u00f1o"},"before":":attribute debe ser una fecha anterior a :date.","before_or_equal":":attribute debe ser una fecha anterior o igual a :date.","between":{"array":":attribute tiene que tener entre :min - :max \u00edtems.","file":":attribute debe pesar entre :min - :max kilobytes.","numeric":":attribute tiene que estar entre :min - :max.","string":":attribute tiene que tener entre :min - :max caracteres."},"boolean":"El campo :attribute debe tener un valor verdadero o falso.","confirmed":"La confirmaci\u00f3n de :attribute no coincide.","custom":{"email":{"unique":"El :attribute ya ha sido registrado."},"password":{"min":"La :attribute debe contener m\u00e1s de :min caracteres"}},"date":":attribute no es una fecha v\u00e1lida.","date_equals":":attribute debe ser una fecha igual a :date.","date_format":":attribute no corresponde al formato :format.","different":":attribute y :other deben ser diferentes.","digits":":attribute debe tener :digits d\u00edgitos.","digits_between":":attribute debe tener entre :min y :max d\u00edgitos.","dimensions":"Las dimensiones de la imagen :attribute no son v\u00e1lidas.","distinct":"El campo :attribute contiene un valor duplicado.","email":":attribute no es un correo v\u00e1lido","exists":":attribute es inv\u00e1lido.","file":"El campo :attribute debe ser un archivo.","filled":"El campo :attribute es obligatorio.","gt":{"array":"El campo :attribute debe tener m\u00e1s de :value elementos.","file":"El campo :attribute debe tener m\u00e1s de :value kilobytes.","numeric":"El campo :attribute debe ser mayor que :value.","string":"El campo :attribute debe tener m\u00e1s de :value caracteres."},"gte":{"array":"El campo :attribute debe tener como m\u00ednimo :value elementos.","file":"El campo :attribute debe tener como m\u00ednimo :value kilobytes.","numeric":"El campo :attribute debe ser como m\u00ednimo :value.","string":"El campo :attribute debe tener como m\u00ednimo :value caracteres."},"image":":attribute debe ser una imagen.","in":":attribute es inv\u00e1lido.","in_array":"El campo :attribute no existe en :other.","integer":":attribute debe ser un n\u00famero entero.","ip":":attribute debe ser una direcci\u00f3n IP v\u00e1lida.","ipv4":":attribute debe ser un direcci\u00f3n IPv4 v\u00e1lida","ipv6":":attribute debe ser un direcci\u00f3n IPv6 v\u00e1lida.","json":"El campo :attribute debe tener una cadena JSON v\u00e1lida.","lt":{"array":"El campo :attribute debe tener menos de :value elementos.","file":"El campo :attribute debe tener menos de :value kilobytes.","numeric":"El campo :attribute debe ser menor que :value.","string":"El campo :attribute debe tener menos de :value caracteres."},"lte":{"array":"El campo :attribute debe tener como m\u00e1ximo :value elementos.","file":"El campo :attribute debe tener como m\u00e1ximo :value kilobytes.","numeric":"El campo :attribute debe ser como m\u00e1ximo :value.","string":"El campo :attribute debe tener como m\u00e1ximo :value caracteres."},"max":{"array":":attribute no debe tener m\u00e1s de :max elementos.","file":":attribute no debe ser mayor que :max kilobytes.","numeric":":attribute no debe ser mayor a :max.","string":":attribute no debe ser mayor que :max caracteres."},"mimes":":attribute debe ser un archivo con formato: :values.","mimetypes":":attribute debe ser un archivo con formato: :values.","min":{"array":":attribute debe tener al menos :min elementos.","file":"El tama\u00f1o de :attribute debe ser de al menos :min kilobytes.","numeric":"El tama\u00f1o de :attribute debe ser de al menos :min.","string":":attribute debe contener al menos :min caracteres."},"not_in":":attribute es inv\u00e1lido.","not_regex":"El formato del campo :attribute no es v\u00e1lido.","numeric":":attribute debe ser num\u00e9rico.","present":"El campo :attribute debe estar presente.","regex":"El formato de :attribute es inv\u00e1lido.","required":"El campo :attribute es obligatorio.","required_if":"El campo :attribute es obligatorio cuando :other es :value.","required_unless":"El campo :attribute es obligatorio a menos que :other est\u00e9 en :values.","required_with":"El campo :attribute es obligatorio cuando :values est\u00e1 presente.","required_with_all":"El campo :attribute es obligatorio cuando :values est\u00e1 presente.","required_without":"El campo :attribute es obligatorio cuando :values no est\u00e1 presente.","required_without_all":"El campo :attribute es obligatorio cuando ninguno de :values est\u00e9n presentes.","same":":attribute y :other deben coincidir.","size":{"array":":attribute debe contener :size elementos.","file":"El tama\u00f1o de :attribute debe ser :size kilobytes.","numeric":"El tama\u00f1o de :attribute debe ser :size.","string":":attribute debe contener :size caracteres."},"starts_with":"El campo :attribute debe comenzar con uno de los siguientes valores: :values","string":"El campo :attribute debe ser una cadena de caracteres.","timezone":"El :attribute debe ser una zona v\u00e1lida.","unique":"El campo :attribute ya ha sido registrado.","uploaded":"Subir :attribute ha fallado.","url":"El formato :attribute es inv\u00e1lido.","uuid":"El campo :attribute debe ser un UUID v\u00e1lido."},"pt-BR.auth":{"failed":"Credenciais informadas n\u00e3o correspondem com nossos registros.","throttle":"Voc\u00ea realizou muitas tentativas de login. Por favor, tente novamente em :seconds segundos."},"pt-BR.pagination":{"next":"Pr\u00f3xima &raquo;","previous":"&laquo; Anterior"},"pt-BR.passwords":{"password":"A senha deve conter pelo menos seis caracteres e ser igual \u00e0 confirma\u00e7\u00e3o.","reset":"Sua senha foi redefinida!","sent":"Enviamos um link para redefinir a sua senha por e-mail.","token":"Esse c\u00f3digo de redefini\u00e7\u00e3o de senha \u00e9 inv\u00e1lido.","user":"N\u00e3o conseguimos encontrar nenhum usu\u00e1rio com o endere\u00e7o de e-mail informado."},"pt-BR.validation":{"accepted":"O campo :attribute deve ser aceito.","active_url":"O campo :attribute deve conter uma URL v\u00e1lida.","after":"O campo :attribute deve conter uma data posterior a :date.","after_or_equal":"O campo :attribute deve conter uma data superior ou igual a :date.","alpha":"O campo :attribute deve conter apenas letras.","alpha_dash":"O campo :attribute deve conter apenas letras, n\u00fameros e tra\u00e7os.","alpha_num":"O campo :attribute deve conter apenas letras e n\u00fameros .","array":"O campo :attribute deve conter um array.","attributes":{"address":"endere\u00e7o","age":"idade","body":"conte\u00fado","city":"cidade","country":"pa\u00eds","date":"data","day":"dia","description":"descri\u00e7\u00e3o","email":"e-mail","excerpt":"resumo","first_name":"primeiro nome","gender":"g\u00eanero","hour":"hora","last_name":"sobrenome","message":"mensagem","minute":"minuto","mobile":"celular","month":"m\u00eas","name":"nome","password":"senha","password_confirmation":"confirma\u00e7\u00e3o da senha","phone":"telefone","remember":"lembrar-se de mim","second":"segundo","sex":"sexo","state":"estado","subject":"assunto","text":"texto","time":"hora","title":"t\u00edtulo","username":"usu\u00e1rio","year":"ano"},"before":"O campo :attribute deve conter uma data anterior a :date.","before_or_equal":"O campo :attribute deve conter uma data inferior ou igual a :date.","between":{"array":"O campo :attribute deve conter de :min a :max itens.","file":"O campo :attribute deve conter um arquivo de :min a :max kilobytes.","numeric":"O campo :attribute deve conter um n\u00famero entre :min e :max.","string":"O campo :attribute deve conter entre :min a :max caracteres."},"boolean":"O campo :attribute deve conter o valor verdadeiro ou falso.","confirmed":"A confirma\u00e7\u00e3o para o campo :attribute n\u00e3o coincide.","custom":{"attribute-name":{"rule-name":"custom-message"}},"date":"O campo :attribute n\u00e3o cont\u00e9m uma data v\u00e1lida.","date_equals":"O campo :attribute deve ser uma data igual a :date.","date_format":"A data informada para o campo :attribute n\u00e3o respeita o formato :format.","different":"Os campos :attribute e :other devem conter valores diferentes.","digits":"O campo :attribute deve conter :digits d\u00edgitos.","digits_between":"O campo :attribute deve conter entre :min a :max d\u00edgitos.","dimensions":"O valor informado para o campo :attribute n\u00e3o \u00e9 uma dimens\u00e3o de imagem v\u00e1lida.","distinct":"O campo :attribute cont\u00e9m um valor duplicado.","email":"O campo :attribute n\u00e3o cont\u00e9m um endere\u00e7o de email v\u00e1lido.","exists":"O valor selecionado para o campo :attribute \u00e9 inv\u00e1lido.","file":"O campo :attribute deve conter um arquivo.","filled":"O campo :attribute \u00e9 obrigat\u00f3rio.","gt":{"array":"O campo :attribute deve ter mais que :value itens.","file":"O arquivo :attribute deve ser maior que :value kilobytes.","numeric":"O campo :attribute deve ser maior que :value.","string":"O campo :attribute deve ser maior que :value caracteres."},"gte":{"array":"O campo :attribute deve ter :value itens ou mais.","file":"O arquivo :attribute deve ser maior ou igual a :value kilobytes.","numeric":"O campo :attribute deve ser maior ou igual a :value.","string":"O campo :attribute deve ser maior ou igual a :value caracteres."},"image":"O campo :attribute deve conter uma imagem.","in":"O campo :attribute n\u00e3o cont\u00e9m um valor v\u00e1lido.","in_array":"O campo :attribute n\u00e3o existe em :other.","integer":"O campo :attribute deve conter um n\u00famero inteiro.","ip":"O campo :attribute deve conter um IP v\u00e1lido.","ipv4":"O campo :attribute deve conter um IPv4 v\u00e1lido.","ipv6":"O campo :attribute deve conter um IPv6 v\u00e1lido.","json":"O campo :attribute deve conter uma string JSON v\u00e1lida.","lt":{"array":"O campo :attribute deve ter menos que :value itens.","file":"O arquivo :attribute ser menor que :value kilobytes.","numeric":"O campo :attribute deve ser menor que :value.","string":"O campo :attribute deve ser menor que :value caracteres."},"lte":{"array":"O campo :attribute n\u00e3o deve ter mais que :value itens.","file":"O arquivo :attribute ser menor ou igual a :value kilobytes.","numeric":"O campo :attribute deve ser menor ou igual a :value.","string":"O campo :attribute deve ser menor ou igual a :value caracteres."},"max":{"array":"O campo :attribute deve conter no m\u00e1ximo :max itens.","file":"O campo :attribute n\u00e3o pode conter um arquivo com mais de :max kilobytes.","numeric":"O campo :attribute n\u00e3o pode conter um valor superior a :max.","string":"O campo :attribute n\u00e3o pode conter mais de :max caracteres."},"mimes":"O campo :attribute deve conter um arquivo do tipo: :values.","mimetypes":"O campo :attribute deve conter um arquivo do tipo: :values.","min":{"array":"O campo :attribute deve conter no m\u00ednimo :min itens.","file":"O campo :attribute deve conter um arquivo com no m\u00ednimo :min kilobytes.","numeric":"O campo :attribute deve conter um n\u00famero superior ou igual a :min.","string":"O campo :attribute deve conter no m\u00ednimo :min caracteres."},"not_in":"O campo :attribute cont\u00e9m um valor inv\u00e1lido.","not_regex":"O formato do valor :attribute \u00e9 inv\u00e1lido.","numeric":"O campo :attribute deve conter um valor num\u00e9rico.","present":"O campo :attribute deve estar presente.","regex":"O formato do valor informado no campo :attribute \u00e9 inv\u00e1lido.","required":"O campo :attribute \u00e9 obrigat\u00f3rio.","required_if":"O campo :attribute \u00e9 obrigat\u00f3rio quando o valor do campo :other \u00e9 igual a :value.","required_unless":"O campo :attribute \u00e9 obrigat\u00f3rio a menos que :other esteja presente em :values.","required_with":"O campo :attribute \u00e9 obrigat\u00f3rio quando :values est\u00e1 presente.","required_with_all":"O campo :attribute \u00e9 obrigat\u00f3rio quando um dos :values est\u00e1 presente.","required_without":"O campo :attribute \u00e9 obrigat\u00f3rio quando :values n\u00e3o est\u00e1 presente.","required_without_all":"O campo :attribute \u00e9 obrigat\u00f3rio quando nenhum dos :values est\u00e1 presente.","same":"Os campos :attribute e :other devem conter valores iguais.","size":{"array":"O campo :attribute deve conter :size itens.","file":"O campo :attribute deve conter um arquivo com o tamanho de :size kilobytes.","numeric":"O campo :attribute deve conter o n\u00famero :size.","string":"O campo :attribute deve conter :size caracteres."},"starts_with":"O campo :attribute deve come\u00e7ar com um dos seguintes valores: :values","string":"O campo :attribute deve ser uma string.","timezone":"O campo :attribute deve conter um fuso hor\u00e1rio v\u00e1lido.","unique":"O valor informado para o campo :attribute j\u00e1 est\u00e1 em uso.","uploaded":"Falha no Upload do arquivo :attribute.","url":"O formato da URL informada para o campo :attribute \u00e9 inv\u00e1lido.","uuid":"O campo :attribute deve ser um UUID v\u00e1lido."}});
})();
