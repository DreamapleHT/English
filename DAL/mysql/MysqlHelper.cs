using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using readconfig= System.Configuration;
//引用mysql
using MySql.Data;
using MySql.Data.MySqlClient;

namespace DAL.mysql
{
    class MysqlHelper
    {
        #region 读取连接mysql的字符串
        public static string connectstring = readconfig.ConfigurationManager.ConnectionStrings["SQLConntionString"].ConnectionString;
        #endregion

        #region 查询数据
        public string getData() {
            MySqlConnection mcon = new MySqlConnection(connectstring);
            mcon.Open();
            MySqlCommand mcmd = new MySqlCommand("select * from sys_user", mcon);
            return "";
        }
        #endregion


        #region 增删改
        public string dealData(string sqlcmd)
        {
            MySqlConnection mcon = new MySqlConnection(connectstring);
            try
            {
                mcon.Open();
                MySqlCommand mcmd = new MySqlCommand(sqlcmd, mcon);
                if (mcmd.ExecuteNonQuery() > 0)
                {
                    return "操作成功";
                }
                else
                {
                    return "操作失败";
                }
            }
            catch (Exception)
            {
                
                throw;
            }
            finally
            {
                mcon.Close();
                mcon.Dispose();
            }
         
           
        }
        #endregion

        #region 存储过程
      
        #endregion


    }
}
