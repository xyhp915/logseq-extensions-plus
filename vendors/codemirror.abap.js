!function(E,T){"object"==typeof exports&&"object"==typeof module?module.exports=T(require("codemirror"),require("codemirror/addon/runmode/runmode")):"function"==typeof define&&define.amd?define("abap",["codemirror","codemirror/addon/runmode/runmode"],T):"object"==typeof exports?exports.abap=T(require("codemirror"),require("codemirror/addon/runmode/runmode")):E.abap=T(E.codemirror,E["codemirror/addon/runmode/runmode"])}(window,function(N,e){return I={},O.m=r=[function(E,N,T){"use strict";var e=this&&this.__assign||function(){return(e=Object.assign||function(E){for(var T,N=1,e=arguments.length;N<e;N++)for(var O in T=arguments[N])Object.prototype.hasOwnProperty.call(T,O)&&(E[O]=T[O]);return E}).apply(this,arguments)},O=this&&this.__importDefault||function(E){return E&&E.__esModule?E:{default:E}};Object.defineProperty(N,"__esModule",{value:!0}),N.initAbapMode=N.abapMode=void 0;var r=O(T(1));T(2);var I=T(3);N.abapMode=function(){function O(E,T,N){for(var e=E.next(),O=0;e;){if(T.includes(e)){E.backUp(1);break}O++,e=E.next()}var r=N(E.current().toUpperCase());return!1===r&&E.backUp(O),r}var r=I.KEYWORDS.reduce(function(E,T){var N;return e(e({},E),((N={})[T]=!0,N))},{});return{token:function(E,T){if(E.eatSpace())return null;if(O(E,"(.,: ",function(E){return r.propertyIsEnumerable(E)}))return I.KEYWORD;if(E.match(/^\d+( |\.|$)/,!1))return E.match(/^\d+/),I.NUMBER;if(E.match(/^##\w+/))return I.COMMENT;var N=E.next();E.peek();if("*"===N&&0===E.column()||'"'===N)return E.skipToEnd(),I.COMMENT;if(O(E," ",function(E){return I.OPERATORS.includes(E)}))return I.OPERATOR;if("'"===N){var e=void 0;for(e="";void 0!==e;){if("'"===e){T.mode=!1;break}e=E.next()}return I.STRING}if("|"!==N)return E.eatWhile(/(\w|<|>)/),null;e=void 0;for(e="";void 0!==e;){if("|"===e){T.mode=!1;break}e=E.next()}return I.STRING},startState:function(){return{mode:!1}}}};N.initAbapMode=function(E){E.defineMode("abap",N.abapMode),E.defineMIME("text/abap","abap");var T={name:"ABAP",mime:"text/abap",mode:"abap",ext:["abap"]};return E.modeInfo&&E.modeInfo.push?E.modeInfo.push(T):E.modeInfo||(E.modeInfo=[T]),E},function(E){if(window&&window.CodeMirror)E(window.CodeMirror);else if(r.default)E(r.default);else{try{E(T(!function(){var E=new Error("Cannot find module '../../codemirror/lib/codemirror'");throw E.code="MODULE_NOT_FOUND",E}()))}catch(E){console.log("CodeMirror module not found.")}}}(function(E){return N.initAbapMode(E)})},function(E,T){E.exports=N},function(E,T){E.exports=e},function(E,T,N){"use strict";Object.defineProperty(T,"__esModule",{value:!0}),T.STRING=T.OPERATOR=T.NUMBER=T.KEYWORD=T.COMMENT=T.OPERATORS=T.KEYWORDS=void 0;T.KEYWORDS="ABSTRACT ADD ADD-CORRESPONDING ADJACENT ALIAS ALIASES ALL AND APPEND APPENDING AS ASCENDING ASSERT ASSIGN ASSIGNED ASSIGNING ASSOCIATION AT AUTHORITY-CHECK BACK BEGIN BINARY BLOCK BOUND BREAK-POINT BY BYTE CALL CASE CAST CATCH CHANGING CHARACTER CHECK CLASS CLASS-DATA CLASS-METHOD CLASS-METHODS CLASS-POOL CLEAR CLOSE CNT COLLECT COMMIT COMMUNICATION COMPONENT COMPUTE CONCATENATE COND CONDENSE CONSTANTS CONTINUE CONTROLS CONV CONVERT CORRESPONDING COUNT CREATE CURRENCY DATA DEFAULT DEFERRED DEFINE DEFINITION DELETE DELETING DESCENDING DESCRIBE DESTINATION DETAIL DISPLAY DISPLAY-MODE DIVIDE DIVIDE-CORRESPONDING DO DUPLICATES DURATION EDITOR-CALL ELSE ELSEIF EMPTY END END-OF-DEFINITION END-OF-PAGE END-OF-SELECTION END-TEST-INJECTION END-TEST-SEAM ENDAT ENDCASE ENDCLASS ENDDO ENDEXEC ENDFORM ENDFUNCTION ENDIF ENDING ENDINTERFACE ENDLOOP ENDMETHOD ENDMODULE ENDON ENDPROVIDE ENDSELECT ENDTRY ENDWHILE ENUM EQ EVENT EVENTS EXCEPTION EXCEPTIONS EXEC EXIT EXIT-COMMAND EXPORT EXPORTING EXTRACT FETCH FIELD FIELD-GROUPS FIELD-SYMBOL FIELD-SYMBOLS FIELDS FINAL FIND FIRST FOR FORM FORMAT FOUND FRAME FREE FRIENDS FROM FUNCTION FUNCTION-POOL GE GENERATE GET HANDLE HARMLESS HASHED HEADER HIDE ID IF IMPLEMENTATION IMPLEMENTED IMPORT IMPORTING IN INCLUDE INDEX INFOTYPES INHERITING INIT INITIAL INITIALIZATION INPUT INSERT INSTANCE INTERFACE INTERFACE-POOL INTERFACES INTO IS KEY LEADING LEAVE LEFT LEFT-JUSTIFIED LENGTH LEVEL LIKE LINE LINE-COUNT LINE-SIZE LOAD LOCAL LOG-POINT LOOP LOWER MATCH MATCHCODE MESH MESSAGE MESSAGE-ID METHOD METHODS MODIFY MODULE MOVE MOVE-CORRESPONDING MULTIPLY MULTIPLY-CORRESPONDING NEW NEW-LINE NEW-PAGE NEW-SECTION NEXT NO NO-GAP NO-GAPS NO-SIGN NO-ZERO NON-UNIQUE NOT NUMBER OBJECT OBLIGATORY OCCURRENCE OCCURRENCES OCCURS OF OFFSET ON OPTIONAL OPTIONS OTHERS OUTPUT OVERLAY PACK PARAMETERS PARTIALLY PERFORM PLACES POSITION PRINT-CONTROL PRIVATE PROGRAM PROTECTED PROVIDE PUBLIC PUT RADIOBUTTON RAISE RAISING RANGE RANGES READ READ-ONLY RECEIVE RECEIVING REDEFINITION REDUCE REF REFERENCE REFRESH REGEX REJECT REPLACE REPORT REQUESTED RESERVE RESTORE RESULT RESULTS RETURN RETURNING RIGHT-JUSTIFIED RISK ROLLBACK RP-PROVIDE-FROM-LAST RUN SCAN SCREEN SCROLL SEARCH SECONDARY SECTION SELECT SELECT-OPTIONS SELECTION-SCREEN SEPARATED SET SHIFT SHORT SINGLE SKIP SORT SORTED SOURCE SPLIT STAMP STANDARD START-OF-SELECTION STARTING STATICS STEP STOP STRUCTURE SUBKEY SUBMATCHES SUBMIT SUBTRACT SUBTRACT-CORRESPONDING SUM SUMMARY SUPPLIED SUPPRESS SWITCH SYNTAX-CHECK SYNTAX-TRACE SYSTEM-CALL TABLE TABLES TASK TEST-INJECTION TEST-SEAM TESTING THEN TIME TIMES TITLE TITLEBAR TO TOP-OF-PAGE TRAILING TRANSFER TRANSFORMATION TRANSLATE TRANSPORTING TRY TYPE TYPE-POOL TYPE-POOLS TYPES ULINE UNASSIGN UNIQUE UNPACK UPDATE UPPER USING VALUE WHEN WHERE WHILE WINDOW WITH WORK WRITE".split(" "),T.OPERATORS="?= = > <> < <= >= + - * ** / & &&".concat("EQ NE LT GT GE CS CP NP CO CN DIV MOD BIT-AND BIT-OR BIT-XOR BIT-NOT NOT OR AND XOR BETWEEN EQUIV BYTE-CO, BYTE-CN, BYTE-CA BYTE-NA BYTE-CS BYTE-NS"," ").split(" "),T.COMMENT="comment",T.KEYWORD="keyword",T.NUMBER="number",T.OPERATOR="operator",T.STRING="string"}],O.c=I,O.d=function(E,T,N){O.o(E,T)||Object.defineProperty(E,T,{enumerable:!0,get:N})},O.r=function(E){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(E,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(E,"__esModule",{value:!0})},O.t=function(T,E){if(1&E&&(T=O(T)),8&E)return T;if(4&E&&"object"==typeof T&&T&&T.__esModule)return T;var N=Object.create(null);if(O.r(N),Object.defineProperty(N,"default",{enumerable:!0,value:T}),2&E&&"string"!=typeof T)for(var e in T)O.d(N,e,function(E){return T[E]}.bind(null,e));return N},O.n=function(E){var T=E&&E.__esModule?function(){return E.default}:function(){return E};return O.d(T,"a",T),T},O.o=function(E,T){return Object.prototype.hasOwnProperty.call(E,T)},O.p="",O(O.s=0);function O(E){if(I[E])return I[E].exports;var T=I[E]={i:E,l:!1,exports:{}};return r[E].call(T.exports,T,T.exports,O),T.l=!0,T.exports}var r,I});