sap.ui.define(
  [
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "jblibs/s000/formatter",
    "jblibs/s000/Back",
    "sap/ui/core/Fragment",
    "sap/m/DynamicDateRange",
    "sap/m/MessageBox",
    "../model/formatter"
  ],
  function (
    BaseController,
    JSONModel,
    formatter,
    libsjbBack,
    Fragment,
    DynamicDateRange,
    MessageBox,
    formatter1
  ) {
    "use strict";

    return BaseController.extend("./Worklist", {
      jbBack: new libsjbBack(),
      formatter: formatter,
      formatter1: formatter1,
      //аннотация для первой таблицы
      jsonAnnotation: new JSONModel({
        	RequestAtLeast: "", 
        	Annotation: [
        	    {
        			"id": "ProjectID",
        			"label": "{i18n_domens>tProjectID}",
        			"Filter": {
        				"visible": false,
        				"hidden": false,
        				"width": "9.2rem"
        			},
        			"Column": {
        				"order": 1,
        				"sortProperty": "ProjectID",
        				"sortOrder": 0,
        				"sort": "asc",
        				"visible": false,
        				"width": "9.2rem",
        				"type": "string",
        				"text": "{ProjectID}"
        			}
                  },
                  {
        			"id": "DomenID",
        			"label": "{i18n_domens>tDomenID}",
        			"Filter": {
        				"visible": true,
        				"hidden": false,
        				"width": "9.2rem"
        			},
        			"Column": {
        				"order": 2,
        				"sortProperty": "DomenID",
        				"sortOrder": 1,
        				"sort": "asc",
        				"visible": true,
        				"width": "9rem",
        				"type": "string",
        				"text": "{DomenID}"
        			}
                  },
                  {
        			"id": "ModuleID",
        			"label": "{i18n_domens>tModuleID}",
        			"Filter": {
        				"visible": true,
        				"hidden": false,
        				"width": "9.2rem",
        				"mode":"MultiSelect",
        				"filter":"ModuleID",
        				"text":"ModuleID",
        				"sort":"ModuleID",
        				"key":"ModuleID",
        				"entitySet":"Modules"
        				
        			},
        			"Column": {
        				"order": 3,
        				"sortProperty": "ModuleID",
        				"sortOrder": 0,
        				"sort": "asc",
        				"visible": true,
        				"type": "string",
        				"wudth":"9rem",
        				"text": "{ModuleID}"
        			}
                  },
                  {
        			"id": "Type",
        			"label": "{i18n_domens>tType}",
        			"Filter": {
        				"visible": false,
        				"hidden": false,
        				"mode": "MultiSelect",
        				"width": "9.2rem",
        				"filter":"Type",
        				"text":"Type",
        				"sort":"Type",
        				"key":"Type",
        				"entitySet":"vDomensType"
        			},
        			"Column": {
        				"order": 5,
        				"sortProperty": "Type",
        				"sortOrder": 0,
        				"sort": "asc",
        				"visible": false,
        				"width": "5.2rem",
        				"type": "string",
        				"typeFormat":"medium",
        				"text": "{Type}"
        			}
                  },
                  {
        			"id": "Length",
        			"label": "{i18n_domens>tLength}",
        			"Filter": {
        				"visible": true,
        				"hidden": false,
        			    "width": "9.2rem"
        			},
        			"Column": {
        				"order": 6,
        				"sortProperty": "Length",
        				"sortOrder": 0,
        				"sort": "asc",
        				"visible": true,
        				"width": "3rem",
        				"type": "string",
        				"text": "{Length}"
        			}
                  },
                  {
        			"id": "Fraction",
        			"label": "{i18n_domens>tFraction}",
        			"Filter": {
        				"visible": true,
        				"hidden": false,
        				"width": "9.2rem",
        			},
        			"Column": {
        				"order": 7,
        				"sortProperty": "Fraction",
        				"sortOrder": 0,
        				"sort": "asc",
        				"visible": true,
        				"width": "3rem",
        				"type": "string"
        			}
                  },
                  {
        			"id": "NativeField",
        			"label": "{i18n_domens>tNativeField}",
        			"Filter": {
        				"visible": false,
        				"hidden": false,
        			    "width": "9.2rem"
        			},
        			"Column": {
        				"order": 8,
        				"sortProperty": "NativeField",
        				"sortOrder": 0,
        				"sort": "asc",
        				"visible": false,
        			    "width": "3.2rem",
        				"type": "string",
        				"text": "{NativeField}"
        			}
                  },
                  {
        			"id": "Language",
        			"label": "{i18n>tLanguage}",
        			"Filter": {
        				"visible": false,
        				"hidden": false,
        				"mode": "MultiSelect",
        				"width": "9.2rem",
        				"filter":"Language",
        				"text":"LanguageID",
        				"sort":"LanguageID",
        				"key":"LanguageID",
        				"filterKey":"Language",
        				"entitySet":"Languages"
        			},
        			"Column": {
        				"order": 9,
        				"sortProperty": "Language",
        				"sortOrder": 0,
        				"sort": "asc",
        				"visible": false,
        				"width": "2rem",
        				"type": "string",
        				"text": "{Language}"
        			}
                  },
                  {
        			"id": "DomenName",
        			"label": "{i18n_domens>tName}",
        			"Filter": {
        				"visible": true,
        				"hidden": false,
        				"width": "9.2rem"
        			},
        			"Column": {
        				"order": 4,
        				"sortProperty": "DomenName",
        				"sortOrder": 0,
        				"sort": "asc",
        				"visible": true,
        				"width": "9.2rem",
        				"type": "string",
        				"text": "{DomenName}"
        			}
                  },
                  {
        			"id": "DomenDescription",
        			"label": "{i18n_domens>tDescription}",
        			"Filter": {
        				"visible": true,
        				"hidden": false,
        				"width": "9.2rem"
        			},
        			"Column": {
        				"order": 10,
        				"sortProperty": "DomenDescription",
        				"sortOrder": 0,
        				"sort": "asc",
        				"visible": false,
        				"width": "9rem",
        				"type": "string",
        				"text": "{DomenDescription}"
        			}
                  },
                  {
        			"id": "CreatedBy",
        			"label": "{i18n>tCreatedBy}",
        			"Filter": {
        				"visible": true,
        				"hidden": false,
        				"width": "9.2rem",
        				"mode":"MultiSelect",
        				"filter":"UserID",
        				"text":"UserID",
        				"sort":"UserID",
        				"key":"UserID",
        				"filterKey":"CreatedBy",
        				"entitySet":"Users"
        				
        			},
        			"Column": {
        				"order": 11,
        				"sortProperty": "CreatedBy",
        				"sortOrder": 0,
        				"sort": "asc",
        				"visible": true,
        				"width": "9rem",
        				"type": "string",
        				"text": "{CreatedBy}"
        			}
                  },
                  {
        			"id": "ModifiedBy",
        			"label": "{i18n_domens>tModifiedBy}",
        			"Filter": {
        				"visible": true,
        				"hidden": false,
        				"width": "9.2rem",
        				"mode":"MultiSelect",
        				"filter":"UserID",
        				"text":"UserID",
        				"sort":"UserID",
        				"key":"UserID",
        				"filterKey":"ModifiedBy",
        				"entitySet":"Users"
        			},
        			"Column": {
        				"order": 12,
        				"sortProperty": "ModifiedBy",
        				"sortOrder": 0,
        				"sort": "asc",
        				"visible": true,
        				"width": "9rem",
        				"type": "string",
        				"text": "{ModifiedBy}"
        			}
                  },
                  {
        			"id": "Created",
        			"label": "{i18n>tCreated}",
        			"Filter": {
        				"visible": true,
        				"hidden": false,
        				"mode": "DateRange",
        				"width": "9.2rem",
        				"datePath": "Created",
        				"dateMode": true,
        				"selectedPeriod": "day",
        				"visiblePeriodButtons": "day, week, month, year, all"
        			},
        			"Column": {
        				"order": 13,
        				"sortProperty": "Created",
        				"sortOrder": 0,
        				"sort": "asc",
        				"visible": true,
        				"width": "9rem",
        				"type": "dateTime",
        				"typeFormat":"short",
        				"text": "{Created}"
        			}
                  },
                  {
        			"id": "Modified",
        			"label": "{i18n>tModified}",
        			"Filter": {
        				"visible": true,
        				"hidden": false,
        				"mode": "DateRange",
        				"width": "9.2rem",
        				"datePath": "Modified",
        				"dateMode": true,
        				"selectedPeriod": "day",
        				"visiblePeriodButtons": "day, week, month, year, all"
        			},
        			"Column": {
        				"order": 14,
        				"sortProperty": "Modified",
        				"sortOrder": 0,
        				"sort": "asc",
        				"visible": true,
        				"width": "9rem",
        			    "type": "dateTime",
        				"typeFormat":"short",
        				"text": "{Modified}"
        			}
                  },
                  {
        			"id": "IntegrationID",
        			"label": "{i18n_domens>tIntegrationID}",
        			"Filter": {
        				"visible": false,
        				"hidden": false,
        				"width": "9.2rem"
        			},
        			"Column": {
        				"order": 15,
        				"sortProperty": "IntegrationID",
        				"sortOrder": 0,
        				"sort": "asc",
        				"visible": false,
        				"width": "9rem",
        				"type": "string",
        				"text": "{IntegrationID}"
        			}
                  },
                  {
        			"id": "Version",
        			"label": "{i18n>tVersion}",
        			"Filter": {
        				"visible": false,
        				"hidden": false,
        				"width": "9.2rem"
        			},
        			"Column": {
        				"order": 16,
        				"sortProperty": "Version",
        				"sortOrder": 0,
        				"sort": "asc",
        				"visible": false,
        				"width": "2rem",
        				"type": "string",
        				"text": "{Version}"
        			}
                  }
                  ]
                  }),
                  //аннотация для второй таблицы
                  jsonAnnotation1: new JSONModel({
                	RequestAtLeast: "", 
                	Annotation: [
        	        {
        			"id": "ProjectID",
        			"label": "{i18n_domens>tProjectID}",
        			"Filter": {
        				"visible": true,
        				"hidden": false,
        				"width": "9.2rem",
        				"mode": "MultiSelect",
        				"filter":"ProjectID",
        				"text":"ProjectID",
        				"sort":"ProjectID",
        				"key":"ProjectID",
        				"entitySet":"Projects"
        			},
        			"Column": {
        				"order": 1,
        				"sortProperty": "ProjectID",
        				"sortOrder": 0,
        				"sort": "desc",
        				"visible": false,
        				"width": "9.2rem",
        				"type": "string",
        				"text": "{ProjectID}"
        			}
                  },
                  {
        			"id": "DomenID1",
        			"label": "{i18n_domens>tDomenID}",
        			"Filter": {
        				"visible": true,
        				"hidden": false,
        				"width": "9.2rem"
        			},
        			"Column": {
        				"order": 2,
        				"sortProperty": "DomenID",
        				"sortOrder": 1,
        				"sort": "asc",
        				"visible": true,
        				"width": "9rem",
        				"type": "string",
        				"text": "{DomenID}"
        			}
                  },
                  {
        			"id": "Language",
        			"label": "{i18n>tLanguage}",
        			"Filter": {
        				"visible": true,
        				"hidden": false,
        				"width": "9.2rem",
        				"mode": "MultiSelect",
        				"filter":"LanguageID",
        				"text":"LanguageID",
        				"sort":"LanguageID",
        				"key":"LanguageID",
        				"filterKey":"Language",
        				"entitySet":"Languages"
        			},
        			"Column": {
        				"order": 3,
        				"sortProperty": "Language",
        				"sortOrder": 0,
        				"sort": "asc",
        				"visible": true,
        				"width": "4rem",
        				"type": "string",
        				"text": "{Language}"
        			}
                  },
                  {
        			"id": "DomenName",
        			"label": "{i18n_domens>tName}",
        			"Filter": {
        				"visible": true,
        				"hidden": false,
        				"width": "9.2rem",
        			},
        			"Column": {
        				"order": 4,
        				"sortProperty": "DomenName",
        				"sortOrder": 0,
        				"sort": "asc",
        				"visible": true,
        				"width": "9rem",
        				"type": "string",
        				"text": "{DomenName}"
        			}
                  },
                  {
        			"id": "DomenDescription",
        			"label": "{i18n_domens>tDescription}",
        			"Filter": {
        				"visible": true,
        				"hidden": false,
        				"width": "9.2rem"
        			},
        			"Column": {
        				"order": 5,
        				"sortProperty": "DomenDescription",
        				"sortOrder": 0,
        				"sort": "asc",
        				"visible": true,
        				"width": "9rem",
        				"type": "string",
        				"text": "{DomenDescription}"
        			}
                  },
                  {
        			"id": "CreatedBy",
        			"label": "{i18n_domens>tCreatedBy}",
        			"Filter": {
        				"visible": true,
        				"hidden": false,
        			    "width": "9.2rem",
        			    "mode":"MultiSelect",
        				"filter":"UserID",
        				"text":"UserID",
        				"sort":"UserID",
        				"key":"UserID",
        				"filterKey":"CreatedBy",
        				"entitySet":"Users"
        			},
        			"Column": {
        				"order": 6,
        				"sortProperty": "CreatedBy",
        				"sortOrder": 0,
        				"sort": "asc",
        				"visible": true,
        				"width": "9rem",
        				"type": "string",
        				"text": "{CreatedBy}"
        			}
                  },
                  {
        			"id": "ModifiedBy",
        			"label": "{i18n_domens>tModifiedBy}",
        			"Filter": {
        				"visible": true,
        				"hidden": false,
        				"width": "9.2rem",
        				"mode":"MultiSelect",
        				"filter":"UserID",
        				"text":"UserID",
        				"sort":"UserID",
        				"key":"UserID",
        				"filterKey":"ModifiedBy",
        				"entitySet":"Users"
        				
        			},
        			"Column": {
        				"order": 7,
        				"sortProperty": "ModifiedBy",
        				"sortOrder": 0,
        				"sort": "asc",
        				"visible": true,
        				"width": "9rem",
        				"type": "string",
        				"text": "{ModifiedBy}"
        			}
                  },
                  {
        			"id": "Created",
        			"label": "{i18n_domens>tCreated}",
        			"Filter": {
        				"visible": true,
        				"hidden": false,
        				"mode": "DateRange",
        				"width": "9.2rem",
        				"datePath": "Created",
        				"dateMode": true,
        				"selectedPeriod": "day",
        				"visiblePeriodButtons": "day, week, month, year, all"
        			},
        			"Column": {
        				"order": 8,
        				"sortProperty": "Created",
        				"sortOrder": 0,
        				"sort": "asc",
        				"visible": true,
        				"width": "9rem",
        			    "type": "dateTime",
        				"typeFormat":"short",
        				"text": "{Created}"
        			}
                  },
                  {
        			"id": "Modified",
        			"label": "{i18n_domens>tModified}",
        			"Filter": {
        				"visible": true,
        				"hidden": false,
        				"mode": "DateRange",
        				"width": "9.2rem",
        				"datePath": "Modified",
        				"dateMode": true,
        				"selectedPeriod": "day",
        				"visiblePeriodButtons": "day, week, month, year, all"
        			},
        			"Column": {
        				"order": 9,
        				"sortProperty": "Modified",
        				"sortOrder": 0,
        				"sort": "asc",
        				"visible": true,
        				"width": "9rem",
        			    "type": "dateTime",
        				"typeFormat":"short",
        				"text": "{Modified}"
        			}
                  },
                  {
        			"id": "IntegrationID",
        			"label": "{i18n_domens>tIntegrationID}",
        			"Filter": {
        				"visible": true,
        				"hidden": false,
        				"width": "9.2rem"
        			},
        			"Column": {
        				"order": 10,
        				"sortProperty": "IntegrationID",
        				"sortOrder": 0,
        				"sort": "asc",
        				"visible": false,
        				"width": "9rem",
        				"type": "string",
        				"text": "{IntegrationID}"
        			}
                  },
                  {
        			"id": "Version",
        			"label": "{i18n>tVersion}",
        			"Filter": {
        				"visible": true,
        				"hidden": false,
        				"width": "9.2rem"
        			},
        			"Column": {
        				"order": 11,
        				"sortProperty": "Version",
        				"sortOrder": 0,
        				"sort": "asc",
        				"visible": false,
        				"width": "2rem",
        				"type": "string",
        				"text": "{Version}"
        			}
                  }
               ]
      }),

      onInit: function () {
        let oViewModel = new JSONModel({
        });
        this.setModel(oViewModel, "worklistView");

        this.jbBack.Init(this);
        
        //модель для смены title у диалога в зависимости от действия (Edit Row, Copy Row, Create) и изменения valueState у ключевых полей
        var oDialogModel = new JSONModel({
            rowAction:"",
            keysValueState:'None'
        })
        this.getView().setModel(oDialogModel, 'action')
        //модель для передачи данных о выбранных (selected) строках для удаления
        var oDomensTableModel = new JSONModel({
				selectedItems:[]
			});
		var oDomensTextTableModel = new JSONModel({
				selectedItems: []
			});
			
		var sSelectedKey = this.byId("bar0").getSelectedKey();
    	
    	this.setModel(this.jsonAnnotation, "annotation");
    	this.setModel(this.jsonAnnotation1, 'annotation1');
    	
    	this.setModel(oDomensTableModel, "domensTableModel");
		this.setModel(oDomensTextTableModel, "domensTextTableModel")
		console.log(this.getView().byId("Type"))
	  },
	  
	  setAutoResizableTableColumns: function(sTable){
	      var oTable = this.getView().byId(`${sTable}`)
	      var oColumns = oTable.getColumns()
		    console.log(oColumns)
		    for (var i = 0;i<oColumns.length;i++){
		        oTable.getColumns()[i].setAutoResizable(true)
		        console.log(oTable.getColumns()[i].getAutoResizable())
		    }
	  },
	  
      onPressRefresh:function(){
        this.byId('table').getBinding('rows').refresh();
      },
      
      onPressRefresh1:function(){
        this.byId('table1').getBinding('rows').refresh();
      },

      prepareSelect: function (oEvent) {
        this.aSorter = oEvent.getParameter("aSorts");
        this.sSelect = oEvent.getParameter("sSelect");
        this.callBindTable();
      },
      
      prepareSelect1: function (oEvent) {
        this.aSorter = oEvent.getParameter("aSorts");
        this.sSelect = oEvent.getParameter("sSelect");
        this.callBindTable1();
      },
      
      callBindTable: function (sPath) {
        if (this.sSelect && this.aFilters) {
        let sRequestAtLeast = this.getModel('annotation').getData().RequestAtLeast;
            this.byId("table").bindRows({
            path: "/Domens",
            template: new sap.ui.table.Row({}),
            filters: this.aFilters,
            sorter: this.aSorter,
            parameters: {
              select: this.sSelect + (sRequestAtLeast ? ","+ sRequestAtLeast: ''),
            },
          });
        }
        //----------------------------------------
        this.setAutoResizableTableColumns('table')
		//---------------------------------------------------------------------------------------
      },
      
    callBindTable1: function (sPath) {
        if (this.sSelect && this.aFilters) {
        let sRequestAtLeast = this.getModel('annotation1').getData().RequestAtLeast;
        this.byId("table1").bindRows({
            path: "/DomensText",
            template: new sap.ui.table.Row({}),
            filters: this.aFilters,
            sorter: this.aSorter,
            parameters: {
              select: this.sSelect + (sRequestAtLeast ? ","+ sRequestAtLeast: ''),
            },
          });
        }
        this.setAutoResizableTableColumns('table1')
      },

      onPressFilterBarChange: function (oEvent) {
          this.aFilters = oEvent.getParameter("OdataFilters");
          this.callBindTable();
      },
      
      onPressFilterBarChange1: function (oEvent) {
          this.aFilters = oEvent.getParameter("OdataFilters");
          this.callBindTable1();
      },
		/* =========================================================== */
		/* event handlers                                              */
		/* =========================================================== */
	
        //Добавление записи
		onPressCreateAfter: function (oEvent) {
		    //Нажатие кнопки "+" (добавление новой записи в таблицу)
		    //Получение контекста (сущности) из фильтрбара
		    var oContext = oEvent.getSource()
		    .getParent()
		    .getParent()
		    .getParent()
		    .getParent()
		    .getParent().getProperty('entityData')
		    //Вызов приватного метода
			this._onPressCreateAfter(oContext);
		},

        _onPressCreateAfter: function(oContext/*aFields, fnCreateField, mProperties, sWidth, sHeight, fSave, fCancel*/) {
			//Передает диалогу контекст и формирует title диалога
		    this.getModel("action").setProperty("/rowAction", "Create")
			this._onOpenEditEntryDialog(oContext)
        },
		
		//Редактирование записи
		onPressEditRow: function (oEvent) {
		    //Вызов приватного метода
		    this._onPressEditRow(oEvent);
		},
		
		_onPressEditRow: function(oEvent, aFields, fnCreateField) {
		    //Получение контекста (сущности) 
		    var oRow = oEvent.getSource()
				.getParent()
				.getParent(),
			oContext = oRow.getBindingContext();
			console.log('OEC', oContext)
			//Передает диалогу контекст и формирует title диалога
			this.getModel("action").setProperty("/rowAction", "Edit Row")
			this._onOpenEditEntryDialog(oContext);
		},

    //Копирование записи
    	onPressCreateCopyRow: function (oEvent) {
		//Обработка нажатия кнопки "Скопировать строку"
		    //Вызов приватного метода
			this._onPressCreateCopyRow(oEvent);
		},
		
		_onPressCreateCopyRow: function(oEvent, fSuccessCustom) {
			//Загружает все данные определенной записи для дальнейшей обаботки
			var oRow = oEvent.getSource()
				.getParent()
				.getParent(),
			oContext = oRow.getBindingContext();
			//Передает диалогу контекст и формирует title диалога
			this.getModel("action").setProperty("/rowAction", "Copy Row")
			this._onOpenEditEntryDialog(oContext);
			},
			
	    //Выбор записей для удаления и их удаление
			onChooseDomenForDelete : function(oEvent){
            // обработка select для таблицы Domens
            var selectedPaths = [];
            var oTable = this.byId('table')
            var indices = oTable.getSelectedIndices();
            console.log("indices", indices)
            for (var i = 0;i<=indices.length; i++){
                var idx = indices[i];
                if(oTable.isIndexSelected(idx)){
                    console.log("IS",oTable.isIndexSelected(idx))
                    var ctx = oTable.getContextByIndex(idx);
                    var path = ctx.sPath;
                    console.log('Ctx', ctx)
                    selectedPaths.push(path)
                    this.getView().getModel("domensTableModel").setProperty('/selectedItems', selectedPaths)
                } else {
                    this.getView().getModel("domensTableModel").setProperty('/selectedItems', selectedPaths)
                    console.log("no",this.getView().getModel("domensTableModel").getProperty('/selectedItems'))
            }
            console.log("Selected Paths Local",  selectedPaths,"Selected Paths", this.getModel('domensTableModel').getProperty('/selectedItems'))
            }
        },
        
        onPressDomenDelete:function(){
            // обработка нажатия кнопки delete для таблицы Domens
            var that = this;
            this.getView().getModel('action').setProperty('/rowAction', 'Delete Row')
            console.log(this.getView().getModel('action').getProperty('/rowAction'))
            var oTableModel = this.getView().getModel()
            var oModel = this.getView().getModel('domensTableModel')
            var oTable = this.byId('table')
            var indices = this.getModel('domensTableModel').getProperty('/selectedItems')
            
            MessageBox.confirm(`Подтверждаете удаление ${this.getModel('domensTableModel').getProperty('/selectedItems').length} строк?`, {
                title:"Подтвердите действие",
                onClose:function (sButton){
                    if (sButton === MessageBox.Action.OK){
                        for (let i =0; i<indices.length;i++){
                            console.log(indices[i])
                            oTableModel.remove(indices[i],{
                                success:  function(){
                                //обновляет DomensText после удаления Domens
            			        that.byId('table1').getBinding('rows').refresh();
                                },
                                error:function(oError){
                                    console.log(oError)
                                }
                            })
                        }
                        oModel.setProperty('/selectedItems', [])
                        oTable.clearSelection()
                    } else {
                        oModel.setProperty('/selectedItems', [])
                        oTable.clearSelection()
                    }
                }
            })
           
        },
        
        onChooseTextForDelete : function(oEvent){
            // обработка select для таблицы DomensText
            var selectedPaths = [];
            var oTable = this.byId('table1')
            var indices = oTable.getSelectedIndices();
            console.log("indices", indices)
            for (var i = 0;i<=indices.length; i++){
                var idx = indices[i];
                if(oTable.isIndexSelected(idx)){
                    console.log("IS",oTable.isIndexSelected(idx))
                    var ctx = oTable.getContextByIndex(idx);
                    var path = ctx.sPath;
                    console.log('Ctx', ctx)
                    selectedPaths.push(path)
                    this.getView().getModel("domensTextTableModel").setProperty('/selectedItems', selectedPaths)
                } else {
                    this.getView().getModel("domensTextTableModel").setProperty('/selectedItems', selectedPaths)
                    console.log("no",this.getView().getModel("domensTextTableModel").getProperty('/selectedItems'))
            }
            console.log("Selected Paths Local",  selectedPaths,"Selected Paths", this.getModel('domensTextTableModel').getProperty('/selectedItems'))
            }
        },
        
        onPressTextDelete:function(){
            // обработка нажатия кнопки delete для таблицы DomensText
            this.getView().getModel('action').setProperty('/rowAction', 'Delete Row')
            var oTableModel = this.getView().getModel()
            var oModel = this.getView().getModel('domensTextTableModel')
            var oTable = this.byId('table1')
            var indices = this.getModel('domensTextTableModel').getProperty('/selectedItems')
            
            MessageBox.confirm(`Подтверждаете удаление ${this.getModel('domensTextTableModel').getProperty('/selectedItems').length} строк?`, {
                title:"Подтвердите действие",
                onClose:function (sButton){
                    if (sButton === MessageBox.Action.OK){
                        for (let i =0; i<indices.length;i++){
                            console.log(indices[i])
                            //Закомментировано
                            oTableModel.remove(indices[i])
                        }
                        oModel.setProperty('/selectedItems', [])
                        oTable.clearSelection()
                    } else {
                        oModel.setProperty('/selectedItems', [])
                        oTable.clearSelection()
                    }
                }
            })
        },
        //-------------------------------------------------------------------------------------------------------------------------------		
			getAllPropertyNamesOfEntity: function(sEntityName) {
			//получает название всех свойств определенной сущности
			var aEntityTypes = this.getModel()
				.getServiceMetadata()
				.dataServices.schema[0].entityType;
			var aProperties = aEntityTypes.find(function(entityType) {
					return entityType.name === sEntityName + "Type";
				})
				.property;
			var aPropertyNames = [];
			aProperties.forEach(function(mProperty) {
				aPropertyNames.push(mProperty.name);
			});
			console.log("aPropertyNames", aPropertyNames)
			return aPropertyNames;
		},
		
		filterPropertyNames: function(sEntityName, aPropertyNames) {
		    console.log("A",aPropertyNames)
			// Убирает из массива полей поля, которые не нужно проверять на пустую строку или показывать в попап окне
			return aPropertyNames.filter(function(sPropertyName) {
				return this._isPopUpField(sEntityName,sPropertyName);
			}.bind(this));
		},
		
		_isPopUpField: function(sEntityName, sPropertyName) {
			// Определяет фильтры для нужных полей
			if(sEntityName == "Domens"){
    			return sPropertyName !== "Version" /* && sPropertyName !== this._getEntityIDTitle()*/ && !
    				/Created$/.test(
    					sPropertyName) && !/Modified$/.test(sPropertyName) && !/CreatedBy$/.test(sPropertyName) && !/ModifiedBy$/.test(sPropertyName) &&
    				!/^__/.test(sPropertyName)/*&& !/^Language$/.test(sPropertyName)*/ /*добавлено*/&& !/IntegrationID$/.test(sPropertyName)/*добавлено*/&& !/NativeField$/.test(sPropertyName) ;
			} else {
			    return sPropertyName !== "Version" /* && sPropertyName !== this._getEntityIDTitle()*/ && !
				/Created$/.test(
					sPropertyName) && !/Modified$/.test(sPropertyName) && !/CreatedBy$/.test(sPropertyName) && !/ModifiedBy$/.test(sPropertyName) &&
				!/^__/.test(sPropertyName) /*&& !/^Language$/.test(sPropertyName)*//*добавлено*/&& !/IntegrationID$/.test(sPropertyName) ;
			}
		},

        _createEntry : function(sEntityName, mProperties) {
            return this.getModel()
            .createEntry(sEntityName, {
                properties:mProperties
            })
        },
        
		
    //Функции для работы в диалогах
		_onOpenEditEntryDialog: function(oContext){
		    //Выбирает, какой диалог открывать в зависимости от сущности (Domens или Text)
			console.log("oContext", oContext)
			var oView = this.getView()
			//получает или имя Entity (для создания или копирования) или полный bindingContext(для редактирования)
			var sEntityName = (oContext.sPath)?oContext.sPath.split('(')[0].slice(1):oContext
			if(sEntityName=="Domens"){
			    this._openDomenDialog(oContext,"jbmetadata.Domens.view.fragments.DomensActionsDialog")
			} else {
			    this._openTextDialog(oContext,"jbmetadata.Domens.view.fragments.TextActionsDialog",)
			}
		},
			
		_openDomenDialog : function(oContext, sFragment){
		    var that = this
			//загружает диалог для редактирования Domens
			var oView = this.getView()
			if(!this.actionDomenEntryDialog){
			   this.actionDomenEntryDialog  =  this.loadFragment({
    		    	name:sFragment
    			});
    		} 
			this.actionDomenEntryDialog.then(function(oDialog){
			    //привязывает элемент к диалогу
			    if(oContext.sPath){  //для редактирования; при создании новой записи и копировании Context создается в функции onPressSaveEntry диалога
			        oDialog.bindElement(oContext.sPath);
			    } 
			    oView
			    .addDependent(oDialog)
    		    oDialog.open();
    		    console.log("INpTpe")
    		});
		},
			
		_openTextDialog : function(oContext, sFragment){
		    //загружает диалог для редактирования Text
		    var oView = this.getView()
		    if(!this.actionTextEntryDialog){
			   this.actionTextEntryDialog  =  this.loadFragment({
			    	name:sFragment
    			});
    		} 
			this.actionTextEntryDialog.then(function(oDialog){
			    //привязывает элемент к диалогу
    			if(oContext.sPath){  //для редактирования; при создании новой записи и копировании Context создается в функции onPressSaveEntry диалога
			        oDialog.bindElement(oContext.sPath);
			    } 
    			oView
			    .addDependent(oDialog)
    		    oDialog.open();
			});
		},
		    onCloseDialogs:function(){
		        var oDialog1 = this.getView().byId('DomenDialog')
    			var oDialog2 = this.getView().byId('TextDialog')
    			
    			if (oDialog1){
    			    oDialog1.close();
    			    oDialog1 = null;
    			}
    			if(oDialog2) {
    			    oDialog2.close();
    			    oDialog2 = null
    		    } 
    		    //this._oRowDialog.destroy()
    			//this._oRowDialog = null
    		},
    	    
			updateEntityRow: function(sPath){
			    var that = this;
			    var mProperties = this.createEntryObject(sPath.split('(')[0].slice(1))
			    console.log(sPath.split('(')[0].slice(1))
			    var oDialog = (sPath.split('(')[0].slice(1) === "Domens") ? this.byId("DomenDialog") : this.byId("TextDialog")
			    this.getView().getModel().update(sPath, mProperties, {
				    success:function(data, response){
				        console.log("Data", response)
				        console.log('oD', oDialog)
				        oDialog.setBusy(false)
				        that.onCloseDialogs()
				        //обновляет DomensText после создания Domens
            			this.byId('table1').getBinding('rows').refresh();
				    }, error:function (err){
				        console.log("Error",err)
				    }
				});
	        },
		
		      createEntryObject: function(sEntityName){
    		     var aEntityProperties = this.getAllPropertyNamesOfEntity(sEntityName);
    		     var aFilteredEntityProperties = this.filterPropertyNames(sEntityName, aEntityProperties);
    		     console.log('aF',aFilteredEntityProperties)
    		     var mProperties = {};
    		     if (sEntityName == "Domens"){
        		     for (let key of aFilteredEntityProperties){
        		         mProperties[key] = this.getView().byId(`inp${key}`).getValue()
        		         console.log(key, `inp${key}`, this.getView().byId(`inp${key}`).getValue())
        		    }
        		    if (mProperties.Fraction == ""){
        		        mProperties.Fraction = null
        		    }
        		    if (mProperties.Length == ""){
        		        mProperties.Length = null
        		    }
        		    mProperties.Version = "A";
    			    /*if (mProperties.hasOwnProperty("Language")&&mProperties.Language == "") {
    				    mProperties.Language = this.jbBack.getLanguage();
    			    }*/
    		     } else {
    		         for (let key of aFilteredEntityProperties){
        		         console.log(key, `inp${key}`)
        		         mProperties[key] = this.getView().byId(`inp${key}1`).getValue()
    		        }
    		     }
    		     console.log("MProperties",mProperties)
    		     return mProperties
    		  },
		  
    	      checkDropdown: async function(sEntityName, aCheckingObjects){
    	        var that = this;
    	        var aArrayPromises = [];
    	        var arr = [];
    	        var oDialog = (sEntityName == 'Domens')?that.byId("DomenDialog"):that.byId("TextDialog")
    	        for (var i = 0; i<aCheckingObjects.length;i++){
    	            aArrayPromises.push(that.dropdown_i(i,aCheckingObjects))
    	            console.log("aArrayPromises",aArrayPromises)
    	        }
    	        await Promise.all(aArrayPromises).then((data)=>{
    	            console.log("PData", data)
    	            for (var i =0; i<data.length; i++){
    	                if (!data[i].results.length){
    	                    this.byId(`${aCheckingObjects[i].field}`).setValueState('Warning')
    	                    this.byId(`${aCheckingObjects[i].field}`).setValueStateText('Значение не из списка')
    	                    arr.push(false)
    	                }
    	           }
    	           if(!arr.length){
    	               this.checkExistingKey(sEntityName)
    	           } else {
    	               MessageBox.warning(`Пожалуйста, выберите значение из списка`, {
                            title:"Warning",
                            onClose:function (sButton){
                            if (sButton === MessageBox.Action.OK){
                                console.log("Понятно")
                                oDialog.setBusy(false)
                                }
                            }
                        })
    	           }
    	        })
    	    },
    	    
    	    dropdown_i: function(i,aCheckingObjects){
    	        var that = this;
    	        var oModel = that.getModel()
    	        return new Promise((resolve, reject) =>{
    	            oModel.read('/' + aCheckingObjects[i].entity, {
                        urlParameters: {
                            $select: aCheckingObjects[i].select,
                            $filter: aCheckingObjects[i].select + ' eq ' + "'" + `${this.byId(aCheckingObjects[i].field).getValue()}` + "'",
    					},
                        success: function(oData, oResponse){
                           console.log("Success",oData)
                           resolve(oData)
                        }, 
                        error:function(oError){
                            console.log(oError)
                        }
                    })
                }).then((oData)=>{
            	     console.log("oData",oData/*, arr*/)
            	     return oData
            	 })
            },
    	    
        ifFromDropdown : function(sEntityName){
            var that = this;
            var aCheckingObjects;
            var arr = [];
            var oModel = that.getModel()
            if (sEntityName == "Domens"){
                aCheckingObjects = [
            //Закомментировано
                    //{field:"inpProjectID", entity:"Projects", select:"ProjectID"},
                    {field:"inpModuleID", entity:"Modules", select:"ModuleID"},
                    {field:"inpType", entity:"vDomensType", select:"Type"}
                ]
            } else {
                aCheckingObjects = [
            //Закомментировано
                    //{field:"inpProjectID1", entity:"Projects", select:"ProjectID"},
                    {field:"inpModuleID1", entity:"Modules", select:"ModuleID"},
                    {field:"inpDomenID1", entity:"Domens", select:"DomenID"},
                    {field:"inpLanguage1", entity:"Languages", select:"LanguageID"},
                ]
            }
            /*if(this.checkRequiredFields){*/
             this.checkDropdown(sEntityName, aCheckingObjects)
            /*}*/         
        },
       
    	checkExistingKey: function(sEntityName){
    	        //вызывается только при создвнии новой записи с нуля или путем копирования имеющейся
			    //console.log(this.getModel('action').getProperty('/keyNotFromDropdown'))
			    var that = this;
			    var oModel = this.getModel('action')
			    var mKeyProperties = {};
			    var oDialog;
			    
                if (sEntityName == "Domens"){
			       mKeyProperties = {
        		       ProjectID : this.getView().byId('inpProjectID').getValue(),
        		       ModuleID : this.getView().byId('inpModuleID').getValue(),
        		       DomenID : this.getView().byId('inpDomenID').getValue()
    			    }
    			    oDialog = that.byId('DomenDialog')
    			} else {
    			   mKeyProperties = {
        		       ProjectID : this.getView().byId('inpProjectID1').getValue(),
        		       ModuleID : this.getView().byId('inpModuleID1').getValue(),
        		       DomenID : this.getView().byId('inpDomenID1').getValue(),
        		       Language : this.getView().byId('inpLanguage1').getValue()
			        }
			        oDialog = that.byId("TextDialog")
    			}
    			    this.getModel().metadataLoaded().then(()=>{
			            var sKey = this.getModel().createKey('/' + sEntityName, mKeyProperties);
			            console.log(sKey);
			            var oObject = this.getModel().getObject(sKey)
				        console.log('oObject',oObject)
				        if (oObject){
    				        console.log("Data", oObject)
    				        oModel.setProperty('/keysValueState', 'Warning')
    				        MessageBox.warning(`Запись с таким ключом уже существует.
    				        Пожалуйста, внесите изменения хотя бы в одно из выделенных полей`, {
                                title:"Warning",
                                onClose:function (sButton){
                                    if (sButton === MessageBox.Action.OK){
                                    console.log("Понятно")
                                     oDialog.setBusy(false)
                                    }
                                }
                            })
				        } else {
    				        var mProperties = that.createEntryObject(sEntityName)
    				        var oContext = that._createEntry('/' + sEntityName, mProperties)
    				        //записывает на бэкенд
    				        that.getModel()  
            				.submitChanges({
            					success: () => {
            						console.log("Success")
            						oDialog.setBusy(false)
            						this.onCloseDialogs()
            						//обновляет DomensText после создания Domens (при копировании)
            			            this.byId('table1').getBinding('rows').refresh();
            						//this._oSmartTable.rebindTable(true);
            					}, 
            					error: () => {
            						this.getModel().resetChanges();
            					}
            				});
    			        }
    	            })
    	       },
    	
			unlockKeys:function(){
			    this.getModel('action').setProperty('/keysValueState', 'None')
			},
			
			unlockInputs: function(oEvent){
			    console.log(oEvent.getSource())
			    oEvent.getSource().setProperty('valueState', 'None')
			},
			
			checkRequiredFields: function(sEntityName){
			    console.log(this.getModel('action').getProperty('/rowAction'))
			    var requiredFields;
			    var skippedInputs = [];
			    if(sEntityName === "Domens"){
			        requiredFields = ['ProjectID', 'ModuleID','DomenID', 'DomenName', 'DomenDescription','Type', 'Language'] 
			        requiredFields.map((item)=>{
			           if (item == 'Language'&& this.getModel('action').getProperty('/rowAction') == 'Create') {
			                console.log("language create")
				            this.byId('inpLanguage').setValue(this.jbBack.getLanguage())
				            };
    			        if(this.byId(`inp${item}`).getValue() == ""){
    			            this.byId(`inp${item}`).setValueState("Error")
    			            this.byId(`inp${item}`).setValueStateText("Обязательное поле")
    			            skippedInputs.push(item)
    			        } else {
    			            console.log('true')
    			        }
			        })
			     } else {
			        requiredFields = ['ProjectID', 'ModuleID','DomenID', 'DomenName', 'DomenDescription'/*,'Type'*/, 'Language'] 
			        requiredFields.map((item)=>{
    			        console.log(item)
    			        if(this.byId(`inp${item}1`).getValue() == ""){
    			            this.byId(`inp${item}1`).setValueState("Error")
    			            skippedInputs.push(item)
    			            console.log('false')
    			        } else {
    			            console.log('true')
    			        }
			        })
			    }  
			    if (skippedInputs.length > 0){
			        return false
			    } else {
			        return true
			    }
		    },
			    
		onPressSaveEntry: function(oEvent) {
		   // Для попап окна
			var that = this;
			oEvent.getSource().getParent().setBusy(true)
			var sDialogId = oEvent.getSource().getParent().sId.split('--')[2]
			console.log(sDialogId)
			var sEntityName = (sDialogId == 'DomenDialog') ? 'Domens':'DomensText';
			
			//путь для remove или update операций 
			var sPath;
			if(oEvent.getSource().getParent().getBindingContext() != undefined){
			    //eсли диалог имеет binding context, путь берется из него
			    sPath =  oEvent.getSource().getParent().getBindingContext().sPath
			} else {
			    //если binding context'a нет, из id диалога (для создания новой записи) 
			    sPath = sEntityName
			}
			
			//производимое действие
			var action  = this.getView().getModel('action').getProperty('/rowAction')
			console.log('Action',action)
			if (this.checkRequiredFields(sEntityName)){
    			if (action == 'Edit Row'){           //для редактирования
    			    this.updateEntityRow(sPath)
    			} else if (action == 'Delete Row') {  //для удаления  
    			      if (sEntityName = "Domens"){
    			        this.onPressDomenDelete(sPath)
    			    } else {
    			        this.onPressTextDelete(sPath)
    		        }
    			} else {   
    			    this.ifFromDropdown(sEntityName)
    			     }
        	} else {
    		    MessageBox.error(`Заполните обязательные поля`, {
                    title:"Error",
                    onClose:function (sButton){
                    if (sButton === MessageBox.Action.CLOSE){
                        console.log("Понятно")
                        oEvent.getSource().getParent().setBusy(false)
                       }
                    }
                })
    		}
    			this.unlockKeys()
    	},
    		
    	onPressCancelEntry: function() {
    		// Для попап окна
    		this.getModel()
    			.resetChanges();
    		this.onCloseDialogs()
    		this.unlockKeys()
    	},
    	
    	/*filt: function(){
        var a = []
        var data = ['AF', 'AF', 'SV', 'FG' , 'AF']
        for (var i = 0; i<data.length;i++){
            if(a.indexOf(data[i])=== -1){
                a.push(data[i])
            } 
        }
            console.log(a)
            return a
        }*/
        /*filt:function(){
            this.getModel().remove("/vDomensType('ttt')")
        }*/
     });
  }
);
