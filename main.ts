let dis = 0
DFRobotMaqueenPlus.I2CInit()
DFRobotMaqueenPlus.I2CInit()
DFRobotMaqueenPlus.PID(PID.OFF)
basic.forever(function () {
    dis = DFRobotMaqueenPlus.ultraSonic(PIN.P8, PIN.P12)
    if (dis != 0 && dis < 0) {
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 40)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 40)
    }
    if (dis != 0 && dis < 20) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 40)
    }
    if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) != 0 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) != 0) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 40)
        basic.pause(1000)
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
        DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 40)
        DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 40)
        basic.pause(500)
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
    }
    if (DFRobotMaqueenPlus.readPatrol(Patrol.L1) != 1 && DFRobotMaqueenPlus.readPatrol(Patrol.R1) != 1) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 40)
    }
})
