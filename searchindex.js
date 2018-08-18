Search.setIndex({docnames:["index","scenedetect/detectors","scenedetect/frame_timecode","scenedetect/scene_detector","scenedetect/scene_manager","scenedetect/stats_manager","scenedetect/video_manager","scenedetect/video_splitter"],envversion:53,filenames:["index.rst","scenedetect\\detectors.rst","scenedetect\\frame_timecode.rst","scenedetect\\scene_detector.rst","scenedetect\\scene_manager.rst","scenedetect\\stats_manager.rst","scenedetect\\video_manager.rst","scenedetect\\video_splitter.rst"],objects:{"scenedetect.detectors":{content_detector:[1,0,0,"-"],threshold_detector:[1,0,0,"-"]},"scenedetect.detectors.content_detector":{ContentDetector:[1,1,1,""]},"scenedetect.detectors.content_detector.ContentDetector":{process_frame:[1,2,1,""]},"scenedetect.detectors.threshold_detector":{ThresholdDetector:[1,1,1,""],compute_frame_average:[1,4,1,""]},"scenedetect.detectors.threshold_detector.ThresholdDetector":{add_final_scene:[1,3,1,""],block_size:[1,3,1,""],fade_bias:[1,3,1,""],frame_under_threshold:[1,2,1,""],min_percent:[1,3,1,""],min_scene_len:[1,3,1,""],post_process:[1,2,1,""],process_frame:[1,2,1,""],threshold:[1,3,1,""]},"scenedetect.frame_timecode":{FrameTimecode:[2,1,1,""]},"scenedetect.frame_timecode.FrameTimecode":{equal_framerate:[2,2,1,""],get_framerate:[2,2,1,""],get_frames:[2,2,1,""],get_seconds:[2,2,1,""],get_timecode:[2,2,1,""]},"scenedetect.scene_detector":{SceneDetector:[3,1,1,""]},"scenedetect.scene_detector.SceneDetector":{get_metrics:[3,2,1,""],is_processing_required:[3,2,1,""],post_process:[3,2,1,""],process_frame:[3,2,1,""]},"scenedetect.scene_manager":{SceneManager:[4,1,1,""],write_scene_list:[4,4,1,""]},"scenedetect.scene_manager.SceneManager":{add_detector:[4,2,1,""],clear:[4,2,1,""],clear_detectors:[4,2,1,""],detect_scenes:[4,2,1,""],get_cut_list:[4,2,1,""],get_num_detectors:[4,2,1,""],get_scene_list:[4,2,1,""]},"scenedetect.stats_manager":{FrameMetricNotRegistered:[5,5,1,""],FrameMetricRegistered:[5,5,1,""],NoMetricsRegistered:[5,5,1,""],NoMetricsSet:[5,5,1,""],StatsFileCorrupt:[5,5,1,""],StatsFileFramerateMismatch:[5,5,1,""],StatsManager:[5,1,1,""]},"scenedetect.stats_manager.StatsManager":{get_metrics:[5,2,1,""],is_save_required:[5,2,1,""],load_from_csv:[5,2,1,""],metrics_exist:[5,2,1,""],register_metrics:[5,2,1,""],save_to_csv:[5,2,1,""],set_metrics:[5,2,1,""]},"scenedetect.video_manager":{InvalidDownscaleFactor:[6,5,1,""],VideoDecoderNotStarted:[6,5,1,""],VideoDecodingInProgress:[6,5,1,""],VideoFramerateUnavailable:[6,5,1,""],VideoManager:[6,1,1,""],VideoOpenFailure:[6,5,1,""],VideoParameterMismatch:[6,5,1,""],close_captures:[6,4,1,""],compute_downscale_factor:[6,4,1,""],get_num_frames:[6,4,1,""],get_video_name:[6,4,1,""],open_captures:[6,4,1,""],release_captures:[6,4,1,""],validate_capture_framerate:[6,4,1,""],validate_capture_parameters:[6,4,1,""]},"scenedetect.video_manager.VideoManager":{get:[6,2,1,""],get_base_timecode:[6,2,1,""],get_current_timecode:[6,2,1,""],get_framerate:[6,2,1,""],get_framesize:[6,2,1,""],get_framesize_effective:[6,2,1,""],get_num_videos:[6,2,1,""],get_video_paths:[6,2,1,""],grab:[6,2,1,""],read:[6,2,1,""],release:[6,2,1,""],reset:[6,2,1,""],retrieve:[6,2,1,""],seek:[6,2,1,""],set_downscale_factor:[6,2,1,""],set_duration:[6,2,1,""],start:[6,2,1,""]},"scenedetect.video_splitter":{is_ffmpeg_available:[7,4,1,""],is_mkvmerge_available:[7,4,1,""],split_video_ffmpeg:[7,4,1,""],split_video_mkvmerge:[7,4,1,""]},scenedetect:{detectors:[1,0,0,"-"],frame_timecode:[2,0,0,"-"],scene_detector:[3,0,0,"-"],scene_manager:[4,0,0,"-"],stats_manager:[5,0,0,"-"],video_manager:[6,0,0,"-"],video_splitter:[7,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function","5":"py:exception"},terms:{"0th":4,"234s":2,"300s":[],"abstract":[],"boolean":1,"byte":[],"case":[1,2,6],"class":[1,2,3,4,5,6],"default":[2,6],"final":1,"float":[1,2,5,6],"function":[6,7],"import":1,"int":[1,2,3,4,5,6],"long":1,"new":[4,7],"return":[1,2,3,4,5,6,7],"true":[1,2,3,4,5,6,7],"try":6,"while":1,FPS:6,For:[2,6],IDs:6,POS:6,The:[0,1,2,3,4,5,6,7],There:1,These:7,Used:5,With:[],__add__:[],__delattr__:[],__dict__:[],__dir__:[],__doc__:[],__eq__:[],__float__:[],__format__:[],__ge__:[],__getattribute__:[],__gt__:[],__hash__:[],__iadd__:[],__init__:[],__init_subclass__:[],__int__:[],__isub__:[],__le__:[],__lt__:[],__module__:[],__ne__:[],__new__:[],__reduce__:[],__reduce_ex__:[],__repr__:[],__setattr__:[],__sizeof__:[],__str__:[],__sub__:[],__subclasscheck__:[],__subclasshook__:[],__weakref__:[],_cap_list:6,_metric_kei:3,_parse_timecode_numb:[],_parse_timecode_str:[],_seconds_to_fram:[],abc:[],abcmeta:[],abl:[],about:[],abov:[1,2,6,7],absolut:1,access:[1,2,7],account:1,accur:2,accuraci:4,actual:3,add:4,add_detector:4,add_final_scen:1,added:[2,3,4,5],adding:1,addit:[1,6],addition:5,adjac:1,after:[3,5,6],afterward:4,against:[1,2],algorithm:[0,3,4,5],alia:[],all:[1,2,3,4,5,6],allow:[1,2,4,5],along:2,alreadi:[3,5,6],also:[2,3,4,5,6,7],alwai:2,analysi:6,analyz:5,ani:[2,3,4,5],anoth:6,api:[],appli:1,appropri:1,apt:7,arg:[],arg_overrid:7,argument:2,arithmet:[2,6],assign:3,associ:4,assum:6,attempt:[5,6],attribut:[],autom:4,automat:[6,7],avail:[4,7],averag:1,back:[2,6],backward:[],bar:4,base:[1,2,3,5,6,7],base_timecod:[4,5],base_timecode_fp:5,becom:6,been:[1,3,4,5,6],befor:6,begin:4,being:[1,5],below:1,besid:4,between:[1,2,5],bia:1,bit:1,black:1,blank:5,block:4,block_siz:1,bool:[3,4,5,6,7],both:[1,4,5],bound:6,cach:[4,5],calcul:[2,3,4,5],call:[2,4,5,6,7],can:[0,1,2,3,4,5,6,7],cannot:[1,6],cap_frame_s:6,cap_framer:6,cap_list:6,cap_prop_fp:6,cap_prop_frame_count:6,captur:6,capture_prop:6,caus:1,certain:[5,6,7],chang:[1,3,4],check:[1,5,6,7],check_framer:6,check_opencv_ffmpeg_dl:[],chosen:1,clear:[4,5],clear_detector:4,cli:[],close:6,close_captur:6,colour:1,combin:2,command:[0,7],compar:[1,2],compat:3,complet:4,compress:1,comput:[1,2,3,4,6,7],compute_downscale_factor:6,compute_frame_averag:1,concaten:4,condit:6,condition:2,conform:6,consist:6,constant:2,construct:[4,6],constructor:[4,5,6],contain:[1,2,3,5,6,7],content:1,content_detector:1,contentdetector:[0,4],contigu:4,convert:2,coordin:4,copi:[2,7],copyright:[],correspond:[1,6],could:[5,6],count:6,creat:[2,3,4,5,6],crf:7,cross:1,csv:[4,5],csv_file:5,current:[2,4,5,6],custom:1,cut:[1,2,3,4],cut_list:4,cv2:[4,6],data:5,decim:2,declar:2,decod:[1,6],dectector:3,deduc:6,defalt:6,defin:[2,4],delattr:[],denot:4,depend:7,deriv:3,desir:2,detect:[0,3,4,5,6],detect_scen:[4,5],detector:[1,3,4,5],determin:[2,4,5,6],devic:6,dict:5,dictionari:[],differ:[1,5],dir:[],directli:[],disk:[4,5],displai:4,dissolvedetector:1,distribut:7,divid:[1,6],dll:[],document:0,doe:[5,6],don:5,done:[2,3],download:7,downscal:6,downscale_factor:6,due:[],durat:[4,6],dure:[4,6],each:[1,2,4,5,7],earli:[],easi:1,effect:6,either:[2,6],emul:6,end:[1,4,6,7],end_tim:[4,6],ensur:[1,5,6,7],entir:5,equal:[2,6],equal_framer:2,equival:[2,6],error:6,especi:1,etc:[],evalu:6,even:5,everi:[4,6],exact:[1,2,4],exampl:[2,6],exceed:1,except:[5,6],exclus:6,exist:5,expect:[3,4],expens:4,express:6,extend:[],extens:[],extern:[4,7],facilit:4,factor:6,fade:1,fade_bia:1,fail:6,fals:[1,2,3,5,6,7],fast:[1,7],faster:4,ffmpeg:7,file:[1,4,5,6],file_handl:[],file_list:6,file_nam:6,file_path:6,find:5,first:[4,6],fix:[],flag:5,follow:[6,7],forc:6,forcabl:5,force_sav:5,form:[2,4,6],format:[2,4,6],formatt:[],forth:2,forward:6,found:[0,2,5,6],fps:[2,5],frame:[1,2,3,4,5,6],frame_height:6,frame_imag:6,frame_img:[1,3],frame_num:[1,2,3],frame_numb:5,frame_skip:4,frame_sourc:4,frame_timecod:2,frame_under_threshold:1,frame_width:6,framemetricnotregist:5,framemetricregist:5,framer:[2,4,5,6],frames:6,frametimecod:[0,4,5,6],from:[1,2,3,4,5,6,7],further:[],furthermor:6,futur:1,gener:[1,4,7],get:[2,3,4,5,6,7],get_base_timecod:6,get_csv_read:[],get_csv_writ:[],get_current_timecod:6,get_cut_list:4,get_cv2_imwrite_param:[],get_fram:2,get_framer:[2,6],get_frames:6,get_framesize_effect:6,get_metr:[3,5],get_num_detector:4,get_num_fram:6,get_num_video:6,get_scene_list:4,get_second:2,get_timecod:2,get_video_nam:6,get_video_path:6,getattr:[],give:[],given:[1,2,3,4,5,6],going:[],grab:6,gracefulli:7,graph:5,grayscal:1,greater:[1,6],grei:1,handl:[4,5],has:[3,4,5,6],hash:[],have:[1,4,5,6],height:6,help:[],helper:6,hide_progress:7,how:3,howev:2,hsv:1,html:7,http:7,human:5,idea:3,imag:1,implement:[1,3,4,6],improv:[],imwrit:[],imwrite_jpeg_qu:[],imwrite_png_compress:[],includ:[2,7],increas:1,index:[0,6],indic:[1,5,6],individu:[1,4],inform:1,inheret:[1,3],initi:[4,6],input:[4,5,6,7],input_video_path:7,instal:7,instanc:[4,5],instead:[1,4,6],integ:[1,2,5,6],intend:7,intens:1,interchang:6,interest:5,interfac:[0,3,6,7],intermedi:4,invalid:6,invaliddownscalefactor:6,invok:[],ioerror:6,is_ffmpeg_avail:7,is_mkvmerge_avail:7,is_processing_requir:[1,3],is_save_requir:5,isopen:6,issubclass:[],iter:[1,5],itself:6,jpg:[],kei:[3,5],last:[1,3,4,6],latest:0,length:[1,6],level:1,librari:[],libx264:7,licens:[],like:[6,7],line:[0,7],link:0,linux:7,list:[1,2,3,4,5,6,7],load:[4,5],load_from_csv:5,locat:1,logger:6,look:5,made:[],mai:[1,4,5,6,7],main:[],mainli:7,maintain:1,make:4,manag:7,manual:[4,6],map:5,mappingproxi:[],match:[2,6],matplotlib:5,maximum:[4,6],measur:2,meet:[1,2],memori:[],messag:[5,6],method:[1,2,3,4,5,6],metric:[3,4,5],metric_kei:5,metric_kv_dict:5,metrics_exist:5,middl:1,min_perc:1,min_scene_len:1,minimum:1,minimum_frames_per_second_delta_float:2,minut:2,mismatch:6,miss:[],mkvmerg:7,mkvtoolnix:7,mode:[1,4,5],modifi:6,modul:[0,1,2,3,4,5,6,7],more:[1,6],much:4,multipl:[4,5,6],multipli:1,must:[1,2,4,5,6],mutual:6,name:[3,6],namespac:[],ndarrai:[1,6],nearest:[],necessarili:1,need:[3,4,6],neg:2,next:4,nnn:2,nois:1,nometricsregist:5,nometricsset:5,non:6,none:[1,2,4,5,6],normal:[],note:[0,2,4,6,7],noth:[],notimpl:[],number:[1,2,3,4,5,6],numpi:[1,6],obj:6,object:[2,3,4,5,6],obtain:[4,5,6,7],onc:7,one:[2,5,6],onli:[1,4,6],open:[4,5,6],open_captur:6,opencv:[4,5,6],opencv_ffmpeg:[],opencv_ffmpegxyz:[],oper:2,optim:[4,5,6],option:[1,2,4,6,7],order:[1,3,5,6],org:7,origin:6,other:[1,2,4,5],otherwis:[2,3,5,6,7],out:[1,5,6],outcom:[],output:[2,4],output_csv_fil:4,output_file_prefix:7,output_file_templ:7,overlap:5,overrid:[],overridden:[],overriden:6,own:[4,5],packag:7,page:0,pair:[4,5],param:[],paramet:[1,2,4,5,6],pars:[],parser:[],part:[2,7],particular:[3,5,6],pass:[1,2,3,4,5,6,7],past:4,path:6,pattern:[],per:[1,2],percent:[1,4],percentag:1,perform:[1,3,4,6],period:[],pickl:[],pixel:[1,6],place:2,platform:[],plot:5,png:[],point:[1,2,4,5,6],posit:[1,2,4,6],possibl:[],post:3,post_process:[1,3],precis:[2,5],prefer:4,preset:7,previou:4,print:2,process:[3,4,6],process_fram:[1,3],program:7,programmat:1,progress:4,prompt:7,properti:[2,3,6],prototyp:3,provid:[3,5,6],pyscenedetect:[1,2,3,4,5,6,7],python:0,qualiti:[],queue:[],rais:[2,4,5,6],rate:6,read:[3,4,5,6],readabl:5,reader:[],readthedoc:0,refer:[],reflect:6,regist:[4,5],register_metr:5,relat:[],releas:6,release_captur:6,remov:4,reopen:6,report:[],repr:[],repres:[1,3,4,6],represent:2,request:5,requir:[1,2,3,5],reset:[4,6],reset_save_requir:5,resolut:6,respect:[5,6],result:[4,5,6],retriev:[5,6],rgb:1,right:1,round:2,row:[1,5],rtype:[],run:[4,5],same:[1,2,4,5,6],save:[4,5],save_to_csv:5,scenario:1,scene:[1,3,4,5,6,7],scene_detector:[1,3],scene_list:[4,7],scene_manag:4,scenedetect:[0,1,2,3,4,5,6,7],scenedetector:[0,1,4,5],scenemanag:[0,5,6],sceneresult:4,score:1,search:0,sec:[2,6],second:2,see:3,seek:[4,6],self:[1,2,6],sequenc:[6,7],seri:5,set:[1,3,4,5,6],set_downscale_factor:6,set_dur:[4,6],set_metr:5,setattr:[],should:[1,4,6],show_progress:4,signatur:[],similar:1,sinc:[1,5],singl:[1,6],size:6,skew:1,skip:[4,6],slow:1,softwar:7,some:[1,6],sourc:[4,5,7],space:1,specif:[1,6],specifi:[2,6,7],speed:[4,5],split:[0,4],split_video_ffmpeg:7,split_video_mkvmerg:7,sss:2,ssss:2,standard:2,start:[1,4,6,7],start_tim:[4,6],stat:5,statist:[4,5],stats_file_fp:5,stats_manag:[3,4,5],statsfilecorrupt:5,statsfileframeratemismatch:5,statsmanag:[0,3,4],still:[1,4],stop:6,store:[2,3,5],str:[2,3,5,6],string:[2,3,6],string_typ:[],subclass:[],subsampl:6,subsequ:[1,4,5],subtract:2,succeed:6,sudo:7,sum:[1,6],suppli:6,support:6,suppress_output:7,system:7,take:[1,4],temporari:4,termin:7,test:[2,3],test_timecod:2,than:[1,6],thei:[],them:7,thi:[0,1,2,3,4,5,6],those:[],three:2,threshold:[1,4,5],threshold_detector:1,thresholddetector:[0,4],thrown:[5,6],thu:[1,3,4],time:[2,4,6],timecod:[1,2,5,6,7],timecode_str:[],timestamp:2,toler:1,tool:[4,7],total:6,toward:2,tqdm:4,trigger:1,tune:1,tupl:[2,4,6],turn:4,type:[1,2,3,6],typeerror:[2,6],unicod:[],uniform:[],union:[5,6],unit:2,unless:[2,6],unlik:[1,4],unregist:5,unsign:1,until:4,updat:5,upon:6,url:7,use:[1,4,6,7],use_round:2,used:[1,2,3,4,5,6],useful:5,user:7,uses:1,using:[1,2,4,5,6,7],valid:[2,3,5,6],validate_capture_framer:6,validate_capture_paramet:6,validate_paramet:6,valu:[1,4,5,6],valueerror:[2,4,6],variou:4,veri:5,verifi:6,version:[],versu:[],via:[4,5,6],video:[0,1,2,4,5,6],video_fil:6,video_framer:5,video_manag:6,video_nam:[6,7],video_splitt:7,videocaptur:[4,5,6],videodecod:6,videodecodernotstart:6,videodecodinginprogress:6,videoframerateunavail:6,videomanag:[0,4,5],videoopenfailur:6,videoparametermismatch:6,wai:2,warn:[],weak:[],well:[1,4,6,7],were:[4,5],when:[1,2,3,4,5,6],where:[1,2,4,6,7],which:[1,2,3,4,5,6],whichev:7,whole:6,whose:1,wide:7,width:6,window:[],within:[1,2],without:5,wrap:2,wrapper:[],write:[1,4,5],write_scene_list:4,writer:[],written:[5,7],yet:5,you:6,zero:[2,6]},titles:["PySceneDetect API Reference","Detection Algorithms","FrameTimecode","SceneDetector","SceneManager","StatsManager","VideoManager","Video Splitting"],titleterms:{"class":[],algorithm:1,api:0,content:0,contentdetector:1,detect:1,detector:[],document:[],frame_timecod:[],frametimecod:2,indic:0,modul:[],object:[],overview:[],platform:[],pyscenedetect:0,refer:0,scene:[],scene_detector:[],scenedetect:[],scenedetector:3,scenemanag:4,split:7,statsmanag:5,tabl:0,thresholddetector:1,video:7,videomanag:6,welcom:[]}})