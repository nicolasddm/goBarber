import { container } from 'tsyringe';

import IMailTemplateProvider from './models/IMailTemplateProvider';
import HandlebarsMailTemplateProvider from './implementations/HandlebarsMailTemplateProvider';

const providers = {
  handlebars: container.resolve(HandlebarsMailTemplateProvider),
};

container.registerInstance<IMailTemplateProvider>(
  'MailTemplateProvider',
  providers.handlebars,
);
