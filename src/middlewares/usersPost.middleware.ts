import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class UsersCreateMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { campaign, branch, employeeId, name, status } = req.body;
    const { type, description, serialNumber, active } = req.body.headPhone

    if (!campaign || !branch || !employeeId || !name || status === undefined || !type || !description || !serialNumber || active === undefined) {

      return res.status(400).json({
        message: 'Missing required fields',
        dataReceived: req.body,
        dataStimated: {
          campaign: campaign ? '✔' : '✘',
          branch: branch ? '✔' : '✘',
          employeeId: employeeId ? '✔' : '✘',
          name: name ? '✔' : '✘',
          status: status ? '✔' : '✘',
          headPhone: {
            type: type ? '✔' : '✘',
            description: description ? '✔' : '✘',
            serialNumber: serialNumber ? '✔' : '✘',
            active: active ? '✔' : '✘',
          }
        }
      });
    }

    next();
  }
}