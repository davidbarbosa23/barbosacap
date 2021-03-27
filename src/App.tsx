import React, { useEffect } from 'react';

import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Redirect, Route, RouteComponentProps, Switch, useParams } from 'react-router-dom';

import AppLangs, { defaultLang } from 'config/AppLangs';
import { NotFound, Routes } from 'config/Routes';

interface IParams {
  locale: string;
}

const App: React.FC<RouteComponentProps> = (props) => {
  const { i18n } = useTranslation();
  const params: IParams = useParams();

  useEffect(() => {
    i18n.changeLanguage(params.locale ?? defaultLang);
    // eslint-disable-next-line
  }, [params.locale]);

  return (
    <>
      <Helmet htmlAttributes={{ lang: params.locale ?? defaultLang }} />
      <Switch>
        {params.locale in AppLangs ? '' : <Redirect to={`/${defaultLang + '/' + params.locale}`} />}
        {Routes.map(({ id, path, component }) => (
          <Route key={id} path={`${props.match.url}${path}`} component={component} exact />
        ))}
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default App;
