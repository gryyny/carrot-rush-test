var gdjs;(function(a){const t=new a.Logger("Multiplayer");a.makeMultiplayerVariablesManager=()=>{const g={},p=function({variableNetworkId:r,previousVariableOwner:e,newVariableOwner:n}){if(g[r]){g[r].newVariableOwner=n;return}g[r]={variableName:r,previousVariableOwner:e,newVariableOwner:n}},u=function(r){const e=r.split("_");if(e.length<2)throw new Error("Trying to get the variable type from a network id that is not a valid variable network id.");return{type:e[0]==="game"?"global":"scene",name:e.slice(1).join("_"),containerId:e[0]}},d=function(r,e){const n=e.getVariables();if(n.hasVariable(r)){const i=e.networkId;if(!i){t.info("Variable is being synchronized but the scene has no networkId yet.");return}const o=n.getVariableNameInContainerByLoopingThroughAllVariables(r);if(!o){t.error("Variable is being synchronized but has no name.");return}return i+"_"+o}const l=e.getGame().getVariables();if(l.hasVariable(r)){const i=l.getVariableNameInContainerByLoopingThroughAllVariables(r);if(!i){t.error("Variable is being synchronized but has no name.");return}return"game_"+i}t.error("Trying to modify synchronization of a variable that is not a scene or global variable.")},h=function(r,e){return e.getPlayerOwnership()},b=function(r,e,n){if(t.info(`Setting ownership of variable to player ${n}.`),n<0){t.error("Invalid player number ("+n+") when setting ownership of a variable.");return}const s=e.getPlayerOwnership();if(s===null){t.error("Cannot change ownership of a variable that is not synchronized.");return}e.setPlayerOwnership(n);const l=a.multiplayer.getCurrentPlayerNumber();if(!a.multiplayer.isLobbyGameRunning()||n!==l)return;const i=d(e,r),o=r.networkId;if(!i||!o)return;const{type:c}=u(i);t.info(`Adding variable to be synchronized: ${i} (type: ${c}) from owner ${s} to ${n}.`),p({variableNetworkId:i,previousVariableOwner:s,newVariableOwner:n})};return{getVariableTypeAndNameFromNetworkId:u,getPlayerVariableOwnership:h,setPlayerVariableOwnership:b,takeVariableOwnership:function(r,e){const n=a.multiplayer.getCurrentPlayerNumber();b(r,e,n)},removeVariableOwnership:function(r,e){b(r,e,0)},disableVariableSynchronization:function(r,e){e.disableSynchronization()},handleChangeVariableOwnerMessagesToSend:function(){if(!a.multiplayer.isLobbyGameRunning())return;const r=a.multiplayer.getCurrentPlayerNumber();for(const e in g){const n=g[e],{messageName:s,messageData:l}=a.multiplayerMessageManager.createChangeVariableOwnerMessage({variableNetworkId:e,variableOwner:n.previousVariableOwner,newVariableOwner:n.newVariableOwner});if(n.newVariableOwner===r){const o=a.evtTools.p2p.getAllPeers(),c=a.multiplayerMessageManager.createVariableOwnerChangedMessageNameFromChangeVariableOwnerMessage(s);a.multiplayerMessageManager.addExpectedMessageAcknowledgement({originalMessageName:s,originalData:l,expectedMessageName:c,otherPeerIds:o,shouldCancelMessageIfTimesOut:r!==1})}t.info("Sending change owner message",s);const i=a.evtTools.p2p.getAllPeers();for(const o of i)a.multiplayerMessageManager.sendDataTo(o,s,l);delete g[e]}}}},a.multiplayerVariablesManager=a.makeMultiplayerVariablesManager()})(gdjs||(gdjs={}));
//# sourceMappingURL=multiplayerVariablesManager.js.map
