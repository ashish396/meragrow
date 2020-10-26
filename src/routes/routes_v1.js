const express = require("express"); // Making Object Of Express
const router = express.Router(); // Using Routing Function of Express
const task = require('../../controllers/task');
const user = require('../../controllers/user');
const audit = require('../../controllers/audit');
const taskQues = require('../../controllers/taskQues');
const report = require('../../controllers/report');
const excel = require('../../controllers/excel');
const workOrder = require('../../services/workOrder');


router.route("/createAudit").post(audit.createAudit);

router.route("/updateAudit").post(audit.updateAudit);

router.route("/createTask").post(task.createTask);

router.route("/plantList").post(user.plantList);

router.route("/uploadWoQuesImages").post(taskQues.createTaskQuesImages);

router.route("/addTaskQues").post(taskQues.insertQues);

router.route("/previewList").post(taskQues.taskQuestionList);

router.route("/workOrderList").post(task.workOrderList);

router.route("/taskList").post(user.userTaskList);

router.route("/getQuesList").post(task.getQuesList);

router.route("/login").post(user.login);

router.route("/userListing").post(user.userListing);

router.route("/updateTask").post(task.updateTask);

router.route("/userTaskList").post(user.userauditTaskList);

router.route("/useridTaskList").post(task.useridTaskList);

router.route("/generateReport?:id").get(report.generateSamplePPT);

router.route("/getLineList").post(task.getlineList);

router.route("/getAssetList").post(task.getAssetList);

router.route("/forgot_Password").post(user.forgot_Password);

router.route("/changePassword").post(user.changePassword);

router.route("/userAuditListing").post(user.userAuditListing);

router.route("/deleteTask").post(task.deleteTask);

router.route("/subTaskQues").post(task.subTaskQues);

router.route("/deleteTaskImages").post(task.deleteTaskImages);

router.route("/workOrderSearch").post(task.workOrderSearch);

router.route("/getWorkOrderReference").post(task.getWorkOrderReference);

router.route("/addWorkOrderReference").post(task.addWorkOrderReference);

router.route("/fetchDateWorkOrder").post(task.fetchDateWorkOrder);

router.route("/addInventoryOracleAns").post(taskQues.addInventoryOracleAns);

router.route("/getWoOptions").post(taskQues.getWOAnswers);

router.route("/getInventoryCode").post(taskQues.getInventoryCode);

router.route("/createInventoryCSV").post(audit.createInventoryCSV);

router.route("/uploadCSV").post(audit.uploadCSV);

router.route("/assignBack").post(task.assignBack);

router.route("/getUserid").post(user.getUserid);

router.route("/getUserList").post(user.getUserList);

router.route("/getOhqList").post(task.getOhqData);

router.route("/ReviewMail").post(user.ReviewMail);

router.route("/validateGenerateReport").post(report.validateGenerateReport)

router.route("/updateUser").post(user.updateUser);

router.route("/deleteUser").post(user.deleteUser);

router.route("/generateWoReferenceExcel?:id?:fileName").get(excel.workOderExport);

router.route("/UserCreate").post(user.UserCreate);

router.route("/getUserRole").post(user.getUserRole);

router.route("/insertTabs").post(task.insertTabs);

router.route("/updateSubQues").post(task.updateSubQues);

router.route("/adminLogin").post(user.adminLogin);

router.route("/deleteTabTask").post(task.deleteTabTask);

router.route("/deleteAudit").post(audit.deleteAudit);

router.route("/updateVLM").post(user.updateVLM);

router.route("/addMHTaskQuesManual").post(task.addMHTaskQuesManual);

module.exports = router; // Exporting router